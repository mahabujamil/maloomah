// Generates the social-sharing images (public/og/*.png) and the apple-touch-icon.
// Run after changing categories or colors:  node scripts/make-images.ts
// Text is rendered with the Windows "Dubai" font so Arabic shapes correctly.
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { ICONS } from '../src/data/icons.ts';
import { CATEGORIES, CATEGORY_IDS, SITE } from '../src/site.ts';

const W = 1200;
const H = 630;
const FONT_BOLD = 'C:/Windows/Fonts/DUBAI-BOLD.TTF';
const FONT_MEDIUM = 'C:/Windows/Fonts/DUBAI-MEDIUM.TTF';
const OUT = fileURLToPath(new URL('../public/og/', import.meta.url));
mkdirSync(OUT, { recursive: true });

const logoMark = (size: number, rounded = true) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 40 40">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#047857"/><stop offset="1" stop-color="#10b981"/>
    </linearGradient></defs>
    <rect width="40" height="40" rx="${rounded ? 12 : 0}" fill="url(#g)"/>
    <circle cx="20" cy="12.6" r="3.3" fill="#fff"/>
    <rect x="16.7" y="18.2" width="6.6" height="13.4" rx="3.3" fill="#fff"/>
    <path d="M30.6 6.5l1.05 2.75 2.75 1.05-2.75 1.05-1.05 2.75-1.05-2.75-2.75-1.05 2.75-1.05z" fill="#f5a524"/>
  </svg>`;

function background(c1: string, c2: string, c3?: string) {
  const stops = c3
    ? `<stop offset="0" stop-color="${c1}"/><stop offset=".55" stop-color="${c2}"/><stop offset="1" stop-color="${c3}"/>`
    : `<stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>`;
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">${stops}</linearGradient>
      <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.8" fill="rgba(255,255,255,.22)"/>
      </pattern>
      <linearGradient id="fade" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fff" stop-opacity="1"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/>
      </linearGradient>
      <mask id="m"><rect width="${W}" height="${H}" fill="url(#fade)"/></mask>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <rect width="${W}" height="${H}" fill="url(#dots)" mask="url(#m)"/>
    <circle cx="120" cy="${H + 120}" r="380" fill="rgba(255,255,255,.12)"/>
    <circle cx="${W - 80}" cy="-40" r="300" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="3"/>
  </svg>`;
}

const iconSvg = (name: string, size: number) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
    stroke="rgba(255,255,255,.92)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;

async function text(content: string, size: number, fontfile = FONT_BOLD, opacity = 1) {
  const escaped = content.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return sharp({
    text: {
      text: `<span foreground="#ffffff" alpha="${Math.round(opacity * 100)}%">${escaped}</span>`,
      font: `Dubai ${size}`,
      fontfile,
      rgba: true,
      dpi: 72,
    },
  })
    .png()
    .toBuffer();
}

async function render(
  file: string,
  bg: string,
  layers: { input: Buffer; left: number; top: number }[],
) {
  await sharp(Buffer.from(bg))
    .composite(layers)
    .png({ compressionLevel: 9 })
    .toFile(OUT + file);
  console.log('wrote', file);
}

// Right-align a text image so Arabic lines end at the same edge.
async function rightAligned(buf: Buffer, right: number, top: number) {
  const { width = 0 } = await sharp(buf).metadata();
  return { input: buf, left: right - width, top };
}

async function brandRow(right: number, top: number) {
  const name = await text(`${SITE.name.ar}  ·  ${SITE.name.en}`, 34, FONT_MEDIUM, 0.95);
  const { width = 0 } = await sharp(name).metadata();
  const mark = await sharp(Buffer.from(logoMark(56))).png().toBuffer();
  return [
    { input: mark, left: right - 56, top },
    { input: name, left: right - 56 - 16 - width, top: top + 4 },
  ];
}

// Default image (home page and pages without a category)
{
  const right = W - 90;
  const layers = [
    ...(await brandRow(right, 70)),
    await rightAligned(await text(SITE.name.ar, 150), right, 150),
    await rightAligned(await text(SITE.tagline.ar, 54, FONT_MEDIUM, 0.95), right, 345),
    await rightAligned(await text(SITE.tagline.en, 38, FONT_MEDIUM, 0.85), right, 425),
    await rightAligned(await text('maloomah.com', 30, FONT_MEDIUM, 0.8), right, 540),
    { input: await sharp(Buffer.from(logoMark(260))).png().toBuffer(), left: 110, top: 185 },
  ];
  await render('default.png', background('#064e3b', '#059669', '#0d9488'), layers);
}

// One image per category
for (const id of CATEGORY_IDS) {
  const cat = CATEGORIES[id];
  const right = W - 90;
  const layers = [
    ...(await brandRow(right, 70)),
    await rightAligned(await text(cat.name.ar, 120), right, 175),
    await rightAligned(await text(cat.name.en, 54, FONT_MEDIUM, 0.9), right, 345),
    await rightAligned(await text('maloomah.com', 30, FONT_MEDIUM, 0.8), right, 540),
    { input: await sharp(Buffer.from(iconSvg(id, 330))).png().toBuffer(), left: 90, top: 150 },
  ];
  await render(`${id}.png`, background(cat.colors[0], cat.colors[1]), layers);
}

// Apple touch icon (iOS rounds the corners itself)
await sharp(Buffer.from(logoMark(180, false)))
  .png()
  .toFile(fileURLToPath(new URL('../public/apple-touch-icon.png', import.meta.url)));
console.log('wrote apple-touch-icon.png');
