// Builds the numbers for the private /admin/ dashboard and encrypts them into public/admin/data.json.
// usage: node scripts/admin-data.mjs <raw-folder>
//
// <raw-folder> holds the OpenSEO answers saved as they came, one JSON file per call (see CLAUDE.md,
// "Admin dashboard"): sc_daily, sc_country, sc_device, sc_query, sc_opps, sc_page (Search Console) and
// ga_country, ga_nvr, ga_device, ga_channel, ga_source, ga_pages (Google Analytics). A missing file just
// leaves its card empty. Site stats (articles per category, latest articles, «هل تعلم؟» facts) are read
// from the repo.
//
// Encryption: a fresh AES-256-GCM key per run encrypts the gzipped JSON, and that key is wrapped with the
// RSA-OAEP public key in public/admin/key.json (made once by scripts/admin-setup.html). Only the private key
// opens it, and that is locked with Mahmoud's username + password, so this script needs no secret.
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { webcrypto as crypto } from 'node:crypto';
import { CATEGORIES } from '../src/site.ts';

const RAW = process.argv[2];
if (!RAW) {
  console.error('usage: node scripts/admin-data.mjs <raw-folder>');
  process.exit(1);
}
const KEY_FILE = 'public/admin/key.json';
if (!existsSync(KEY_FILE)) {
  console.error(`${KEY_FILE} is missing: run scripts/admin-setup.html first.`);
  process.exit(1);
}

const read = (name) => {
  const file = `${RAW}/${name}.json`;
  if (!existsSync(file)) return null;
  let a = JSON.parse(readFileSync(file, 'utf8'));
  if (typeof a === 'string') a = JSON.parse(a);
  return a;
};

// Search Console rows carry their dimension values in `keys`.
const sc = (name, dims) => {
  const a = read(name);
  if (!a || a.ok === false || !Array.isArray(a.rows)) return null;
  return {
    start: a.startDate,
    end: a.endDate,
    rows: a.rows.map((r) => {
      const o = {};
      dims.forEach((d, i) => (o[d] = r.keys?.[i] ?? r[d]));
      o.clicks = +r.clicks || 0;
      o.impressions = +r.impressions || 0;
      o.ctr = +r.ctr || 0;
      o.position = r.position == null ? null : +r.position;
      return o;
    }),
  };
};

// Analytics rows are flat objects named by request.dimensions and request.metrics.
const ga = (name) => {
  const a = read(name);
  if (!a || (a.status && a.status !== 'ok') || !Array.isArray(a.rows)) return null;
  const dims = a.request?.dimensions ?? [];
  const mets = a.request?.metrics ?? [];
  const cell = (v) => (v && typeof v === 'object' && 'value' in v ? v.value : v);
  return {
    start: a.request?.resolvedDateRange?.startDate,
    end: a.request?.resolvedDateRange?.endDate,
    rows: a.rows.map((r) => {
      const o = {};
      for (const [k, v] of Object.entries(r)) {
        if (Array.isArray(v)) (/metric/i.test(k) ? mets : dims).forEach((n, i) => n && (o[n] = cell(v[i])));
        else if (v && typeof v === 'object') Object.assign(o, Object.fromEntries(Object.entries(v).map(([k2, v2]) => [k2, cell(v2)])));
        else o[k] = v;
      }
      for (const m of mets) if (o[m] != null && o[m] !== '') o[m] = +o[m];
      return o;
    }),
  };
};

// Site stats from the repo.
const front = (file) => {
  const src = readFileSync(file, 'utf8');
  const get = (k) => src.match(new RegExp(`^${k}:\\s*(.+)$`, 'm'))?.[1].trim().replace(/^['"]|['"]$/g, '');
  return { title: get('title'), date: get('date'), category: get('category') };
};
const articles = {};
const titles = {};
for (const lang of ['ar', 'en']) {
  const dir = `src/content/articles/${lang}`;
  articles[lang] = readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => ({ slug: f.slice(0, -3), ...front(`${dir}/${f}`) }));
  for (const a of articles[lang]) titles[`${lang === 'ar' ? '' : '/en'}/articles/${a.slug}/`] = a.title;
}
const perCategory = Object.entries(CATEGORIES).map(([id, c]) => ({
  id,
  name: c.name.ar,
  count: articles.ar.filter((a) => a.category === id).length,
}));
const latest = [...articles.ar]
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .slice(0, 12)
  .map(({ slug, title, date, category }) => ({ slug, title, date, category: CATEGORIES[category]?.name.ar ?? category }));
const facts = readdirSync('src/data/dyk')
  .filter((f) => f.endsWith('.json'))
  .reduce((n, f) => n + JSON.parse(readFileSync(`src/data/dyk/${f}`, 'utf8')).length, 0);

const data = {
  v: 1,
  generated: new Date().toISOString(),
  sc: {
    daily: sc('sc_daily', ['date']),
    country: sc('sc_country', ['country']),
    device: sc('sc_device', ['device']),
    query: sc('sc_query', ['query']),
    opps: sc('sc_opps', ['query']),
    page: sc('sc_page', ['page']),
  },
  ga: {
    country: ga('ga_country'),
    nvr: ga('ga_nvr'),
    device: ga('ga_device'),
    channel: ga('ga_channel'),
    source: ga('ga_source'),
    pages: ga('ga_pages'),
  },
  site: {
    articles: { ar: articles.ar.length, en: articles.en.length },
    categories: perCategory,
    latest,
    facts,
    titles,
  },
};

// Encrypt.
const key = JSON.parse(readFileSync(KEY_FILE, 'utf8'));
const b64 = (buf) => Buffer.from(buf).toString('base64');
const publicKey = await crypto.subtle.importKey('spki', Buffer.from(key.publicKey.spki, 'base64'), { name: 'RSA-OAEP', hash: 'SHA-256' }, false, ['encrypt']);
const aes = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt']);
const iv = crypto.getRandomValues(new Uint8Array(12));
const body = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, aes, gzipSync(JSON.stringify(data)));
const wrapped = await crypto.subtle.encrypt({ name: 'RSA-OAEP' }, publicKey, await crypto.subtle.exportKey('raw', aes));
writeFileSync('public/admin/data.json', JSON.stringify({ v: 1, generated: data.generated, iv: b64(iv), key: b64(wrapped), data: b64(body) }));

const n = (x) => x?.rows.length ?? 'missing';
console.log(
  `public/admin/data.json written (${(body.byteLength / 1024).toFixed(1)} KB encrypted).`,
  `sc: daily ${n(data.sc.daily)}, country ${n(data.sc.country)}, device ${n(data.sc.device)}, query ${n(data.sc.query)}, opps ${n(data.sc.opps)}, page ${n(data.sc.page)};`,
  `ga: country ${n(data.ga.country)}, nvr ${n(data.ga.nvr)}, device ${n(data.ga.device)}, channel ${n(data.ga.channel)}, source ${n(data.ga.source)}, pages ${n(data.ga.pages)}`,
);
