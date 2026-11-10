// IndexNow: tells Bing, Yandex, Seznam, Naver and Yep (and, through Bing, Yahoo and DuckDuckGo)
// about new and changed pages right after a deploy, so the site doesn't rely on Google alone.
//
//   node scripts/indexnow.mjs prepare   (in the build job, after `npm run build`, before deploy)
//     Compares the freshly built sitemap with the live one and with the files changed in this push,
//     and writes the URLs to submit to indexnow-urls.txt.
//   node scripts/indexnow.mjs submit    (after the deploy, so the key file is live)
//     Sends indexnow-urls.txt to api.indexnow.org.
//
// The key is the 32-character hex file in public/ (public/<key>.txt containing the key).
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

const SITE = process.env.SITE_URL?.replace(/\/$/, '');
const OUT = 'indexnow-urls.txt';
const key = readdirSync('public').find((f) => /^[a-f0-9]{32}\.txt$/.test(f))?.slice(0, 32);
if (!SITE || !key) {
  console.log('IndexNow: SITE_URL or key file missing, skipping.');
  process.exit(0);
}
const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

async function liveSitemap() {
  try {
    const index = await (await fetch(`${SITE}/sitemap-index.xml`)).text();
    const parts = locs(index);
    const all = [];
    for (const p of parts) all.push(...locs(await (await fetch(p)).text()));
    return new Set(all);
  } catch {
    return new Set();
  }
}

function builtSitemap() {
  const files = readdirSync('dist').filter((f) => /^sitemap-\d+\.xml$/.test(f));
  return files.flatMap((f) => locs(readFileSync(`dist/${f}`, 'utf8')));
}

function changedFiles() {
  const before = process.env.BEFORE;
  try {
    const range = before && !/^0+$/.test(before) ? `${before} HEAD` : 'HEAD~1 HEAD';
    return execSync(`git diff --name-only ${range}`, { encoding: 'utf8' }).split('\n').filter(Boolean);
  } catch {
    return [];
  }
}

if (process.argv[2] === 'prepare') {
  const built = builtSitemap();
  const builtSet = new Set(built);
  const live = await liveSitemap();
  // "[indexnow-all]" in the commit message sends every page once (used for the first submission).
  const all = /\[indexnow-all\]/.test(process.env.COMMIT_MSG ?? '');
  const urls = new Set(built.filter((u) => all || !live.has(u))); // brand-new pages
  const changed = changedFiles();
  // Articles: src/content/articles/<lang>/<slug>.md -> /articles/<slug>/ (Arabic) or /en/articles/<slug>/
  for (const f of changed) {
    const m = f.match(/^src\/content\/articles\/(ar|en)\/([^/]+)\.md$/);
    if (m) urls.add(`${SITE}${m[1] === 'en' ? '/en' : ''}/articles/${m[2]}/`);
  }
  // Anything else that changes pages (templates, data, styles): send the home pages too.
  if (changed.some((f) => f.startsWith('src/') && !f.startsWith('src/content/articles/'))) {
    for (const u of built) if (/^https?:\/\/[^/]+\/((en|ar)\/)?$/.test(u)) urls.add(u);
  }
  // If the live sitemap couldn't be read, don't flood: fall back to changed pages and home pages only.
  const list = [...urls].filter((u) => builtSet.has(u)).slice(0, 10000);
  writeFileSync(OUT, list.join('\n'));
  console.log(`IndexNow: ${list.length} URL(s) prepared (${live.size} live, ${built.length} built).`);
  process.exit(0);
}

if (process.argv[2] === 'submit') {
  const list = existsSync(OUT) ? readFileSync(OUT, 'utf8').split('\n').filter(Boolean) : [];
  if (!list.length) {
    console.log('IndexNow: nothing to submit.');
    process.exit(0);
  }
  const host = new URL(SITE).host;
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation: `${SITE}/${key}.txt`, urlList: list }),
  });
  console.log(`IndexNow: submitted ${list.length} URL(s), HTTP ${res.status}`);
  for (const u of list.slice(0, 20)) console.log('  ' + u);
  // 200/202 = accepted. 403/422 are reported but never fail the deploy.
  process.exit(0);
}

console.log('Usage: node scripts/indexnow.mjs prepare|submit');
