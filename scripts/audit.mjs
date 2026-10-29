// SEO audit of the built site in dist/ (run after npm run build): internal links, hreflang/canonical targets,
// images, sitemap coverage and duplicate titles. Every count should be 0 before pushing.
// usage: node scripts/audit.mjs [dist-folder]
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, sep } from 'node:path';

const DIST = process.argv[2] ?? 'dist';
const SITE = 'https://maloomah.com';
const pages = [];
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) pages.push(p);
  }
};
walk(DIST);

const exists = (path) => {
  path = decodeURIComponent(path.split('#')[0].split('?')[0]);
  if (!path.startsWith('/')) return true;
  const f = join(DIST, path);
  return (existsSync(f) && statSync(f).isFile()) || existsSync(join(f, 'index.html'));
};

const broken = new Map();
const noSlash = new Map();
const badAlt = [];
const badCanonical = [];
const missingImg = [];
const titles = new Map();

for (const p of pages) {
  const html = readFileSync(p, 'utf8');
  const rel = p.slice(DIST.length).split(sep).join('/');
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    let h = m[1];
    if (h.startsWith(SITE)) h = h.slice(SITE.length) || '/';
    if (!h.startsWith('/') || h.startsWith('//')) continue;
    if (!exists(h)) broken.set(h, (broken.get(h) || []).concat(rel));
    const pathOnly = h.split(/[?#]/)[0];
    if (!pathOnly.endsWith('/') && !/\.[a-z0-9]+$/i.test(pathOnly)) noSlash.set(h, rel);
  }
  for (const m of html.matchAll(/<link rel="alternate" hreflang="[^"]+" href="([^"]+)"/g)) {
    if (!exists(m[1].replace(SITE, ''))) badAlt.push(`${rel} -> ${m[1]}`);
  }
  const c = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  if (c && !exists(c.replace(SITE, ''))) badCanonical.push(`${rel} -> ${c}`);
  for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    if (m[1].startsWith('/') && !exists(m[1])) missingImg.push(`${rel} -> ${m[1]}`);
  }
  const t = /<title>([^<]*)<\/title>/.exec(html)?.[1];
  if (t && !rel.includes('404')) titles.set(t, (titles.get(t) || []).concat(rel));
}

const dupTitles = [...titles].filter(([, v]) => v.length > 1);
const sm = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
const smUrls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const smMissing = smUrls.filter((u) => !exists(u.replace(SITE, '')));

console.log('pages:', pages.length, '| sitemap urls:', smUrls.length, '| sitemap urls not built:', smMissing.length, smMissing.slice(0, 5));
console.log('broken internal links:', broken.size);
for (const [h, from] of broken) console.log('  ', h, '<- e.g.', from[0], `(${from.length} pages)`);
console.log('links without trailing slash:', noSlash.size);
for (const [h, from] of [...noSlash].slice(0, 10)) console.log('  ', h, '<-', from);
console.log('bad hreflang targets:', badAlt.length, badAlt.slice(0, 10));
console.log('bad canonicals:', badCanonical.length, badCanonical.slice(0, 10));
console.log('missing images:', missingImg.length, missingImg.slice(0, 10));
console.log('duplicate titles:', dupTitles.length);
for (const [t, v] of dupTitles.slice(0, 10)) console.log('  ', t, v);
