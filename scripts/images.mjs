// Find and add free-to-use photos for articles. Only licences that allow commercial use and modification
// (CC0, public domain, CC BY, CC BY-SA); the credit is stored and shown under every photo.
//
//   node scripts/images.mjs search <slug> "<english query>" [commons|openverse]
//       -> downloads up to 12 landscape candidates and a numbered contact sheet into .image-candidates/
//   node scripts/images.mjs pick <slug> <number> "<alt text ar>" "<alt text en>"
//       -> saves src/assets/articles/<slug>.jpg (max 1600px) and its credit in src/data/images.json
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const CANDIDATES = `${ROOT}.image-candidates/`;
const ASSETS = `${ROOT}src/assets/articles/`;
const DB = `${ROOT}src/data/images.json`;
const UA = 'MaloomahImageTool/1.0 (https://maloomah.com; contact@maloomah.com)';
const TILE_W = 360;
const TILE_H = 220;

const get = async (url) => {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res;
};
const stripHtml = (s = '') => s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

function licenseLabel(code, version) {
  const c = (code || '').toLowerCase();
  if (c === 'cc0') return 'CC0';
  if (c === 'pdm' || c.includes('public domain')) return 'Public Domain';
  return `CC ${c.replace(/^cc[- ]?/, '').toUpperCase()}${version ? ` ${version}` : ''}`;
}

async function searchOpenverse(query) {
  const url = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(query)}&page_size=50&license_type=commercial,modification&mature=false`;
  const data = await (await get(url)).json();
  return (data.results ?? []).map((r) => {
    let thumb = r.thumbnail;
    if (/staticflickr\.com/.test(r.url)) thumb = r.url.replace(/(_[a-z])?\.jpg$/, '_z.jpg');
    return {
      title: r.title,
      url: r.url,
      thumb,
      width: r.width ?? 0,
      height: r.height ?? 0,
      creator: r.creator || 'Unknown',
      creatorUrl: r.creator_url || '',
      license: licenseLabel(r.license, r.license_version),
      licenseUrl: r.license_url || '',
      source: r.foreign_landing_url || r.url,
      provider: r.source,
    };
  });
}

async function searchCommons(query) {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=50' +
    `&gsrsearch=${encodeURIComponent(`filetype:bitmap ${query}`)}` +
    '&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=720&iiextmetadatafilter=LicenseShortName|LicenseUrl|Artist|ObjectName|UsageTerms';
  const data = await (await get(url)).json();
  const pages = Object.values(data.query?.pages ?? {}).sort((a, b) => a.index - b.index);
  return pages
    .map((p) => {
      const info = p.imageinfo?.[0];
      const m = info?.extmetadata ?? {};
      const lic = stripHtml(m.LicenseShortName?.value);
      return {
        title: stripHtml(m.ObjectName?.value) || p.title.replace(/^File:/, ''),
        url: info?.url,
        thumb: info?.thumburl,
        width: info?.width ?? 0,
        height: info?.height ?? 0,
        creator: stripHtml(m.Artist?.value) || 'Wikimedia Commons',
        creatorUrl: '',
        license: lic.toLowerCase() === 'public domain' ? 'Public Domain' : lic,
        licenseUrl: stripHtml(m.LicenseUrl?.value),
        source: info?.descriptionurl,
        provider: 'wikimedia',
        ok: /^(cc0|public domain|pdm|cc by(-sa)? [\d.]+)$/i.test(lic),
      };
    })
    .filter((r) => r.url && r.ok);
}

async function search(slug, query, provider = 'commons') {
  let results;
  try {
    results = provider === 'commons' ? await searchCommons(query) : await searchOpenverse(query);
  } catch (e) {
    console.log(`${provider} failed (${e.message}), trying commons`);
    results = await searchCommons(query);
  }
  results = results.filter((r) => r.width >= 1000 && r.width >= r.height * 1.15).slice(0, 12);
  if (!results.length) return console.log('No landscape results. Try another query or provider.');

  const dir = `${CANDIDATES}${slug}/`;
  mkdirSync(dir, { recursive: true });
  const tiles = [];
  const kept = [];
  for (const r of results) {
    try {
      const buf = Buffer.from(await (await get(r.thumb)).arrayBuffer());
      const n = kept.length + 1;
      const label = Buffer.from(
        `<svg width="${TILE_W}" height="${TILE_H}"><rect x="6" y="6" width="44" height="34" rx="8" fill="#000" fill-opacity=".75"/>` +
          `<text x="28" y="31" font-size="22" font-family="Arial" font-weight="700" fill="#fff" text-anchor="middle">${n}</text></svg>`,
      );
      const tile = await sharp(buf).resize(TILE_W, TILE_H, { fit: 'cover' }).composite([{ input: label }]).jpeg().toBuffer();
      tiles.push(tile);
      kept.push(r);
    } catch {}
  }
  writeFileSync(`${dir}results.json`, JSON.stringify(kept, null, 2));
  const cols = 4;
  const rows = Math.ceil(tiles.length / cols);
  const gap = 6;
  const sheet = sharp({
    create: { width: cols * (TILE_W + gap) + gap, height: rows * (TILE_H + gap) + gap, channels: 3, background: '#ffffff' },
  }).composite(tiles.map((input, i) => ({ input, left: gap + (i % cols) * (TILE_W + gap), top: gap + Math.floor(i / cols) * (TILE_H + gap) })));
  await sheet.jpeg({ quality: 82 }).toFile(`${CANDIDATES}${slug}-sheet.jpg`);
  console.log(`sheet: ${CANDIDATES}${slug}-sheet.jpg`);
  kept.forEach((r, i) => console.log(`${i + 1}. ${r.title.slice(0, 70)} | ${r.creator.slice(0, 40)} | ${r.license} | ${r.width}x${r.height} | ${r.provider}`));
}

async function pick(slug, number, altAr, altEn) {
  const list = JSON.parse(readFileSync(`${CANDIDATES}${slug}/results.json`, 'utf8'));
  const r = list[Number(number) - 1];
  if (!r) throw new Error(`No candidate #${number} for ${slug}`);
  mkdirSync(ASSETS, { recursive: true });
  const buf = Buffer.from(await (await get(r.url)).arrayBuffer());
  await sharp(buf)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(`${ASSETS}${slug}.jpg`);
  const db = existsSync(DB) ? JSON.parse(readFileSync(DB, 'utf8')) : {};
  db[slug] = {
    alt: { ar: altAr, en: altEn },
    title: r.title,
    creator: r.creator,
    creatorUrl: r.creatorUrl,
    license: r.license,
    licenseUrl: r.licenseUrl,
    source: r.source,
  };
  const sorted = Object.fromEntries(Object.entries(db).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync(DB, `${JSON.stringify(sorted, null, 2)}\n`);
  const meta = await sharp(`${ASSETS}${slug}.jpg`).metadata();
  console.log(`saved src/assets/articles/${slug}.jpg (${meta.width}x${meta.height}) - ${r.license} by ${r.creator}`);
}

const [cmd, ...args] = process.argv.slice(2);
if (cmd === 'search') await search(args[0], args[1], args[2]);
else if (cmd === 'pick') await pick(args[0], args[1], args[2], args[3]);
else console.log('usage: node scripts/images.mjs search <slug> "<query>" [commons|openverse]\n       node scripts/images.mjs pick <slug> <n> "<alt ar>" "<alt en>"');
