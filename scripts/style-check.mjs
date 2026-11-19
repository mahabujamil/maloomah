// Owner rule 4 (2026-11-19): articles must read like a human teacher wrote them.
// This script flags the template fingerprints and stock phrases that make text look machine-written.
// Usage: node scripts/style-check.mjs            -> summary + the 15 worst slugs
//        node scripts/style-check.mjs --list N   -> the N worst slugs, one per line (for the rewrite routine)
//        node scripts/style-check.mjs <slug>     -> details for one slug in both languages
import { readFileSync, readdirSync } from 'node:fs';

const DIR = 'src/content/articles';
const PHRASES = {
  ar: [
    'في هذا المقال', 'في هذه المقالة', 'إليك', 'إليكم', 'جهّزنا لك', 'جهزنا لك', 'ختاماً', 'ختامًا', 'في الختام',
    'خلاصة القول', 'لا شك أن', 'لا شكّ أن', 'تجدر الإشارة', 'من الجدير بالذكر', 'دعونا', 'لنتعرف', 'لنتعرّف',
    'رحلة', 'عالم مذهل', 'بشكل كبير', 'في عالمنا اليوم', 'في عصرنا الحالي', 'يلعب دوراً', 'يلعب دورًا',
    'سواء كنت', 'هل تساءلت يوماً', 'هل تساءلت يومًا', 'الأمر لا يقتصر', 'الإجابة المختصرة',
  ],
  en: [
    'in this article', 'in conclusion', 'delve', 'dive into', "let's explore", 'whether you', "it's worth noting",
    'it is worth noting', 'in today', 'tapestry', 'unlock', 'journey', 'navigate', 'game-changer', 'crucial',
    'moreover', 'furthermore', 'here is everything', "here's everything", 'have you ever wondered', 'the short answer',
    'plays a vital role', 'plays a key role', 'fascinating world',
  ],
};
const CONCLUSION = ['ختاماً', 'ختامًا', 'في الختام', 'in conclusion'];
const ONCE_OK = ['رحلة', 'journey'];
const FIXED_HEADINGS = {
  ar: ['## الخلاصة', '## أسئلة شائعة'],
  en: ['## Key takeaway', '## Frequently asked questions'],
};

const body = (text) => text.replace(/^---[\s\S]*?\n---\n/, '');

function check(lang, slug) {
  const text = body(readFileSync(`${DIR}/${lang}/${slug}.md`, 'utf8'));
  const lower = text.toLowerCase();
  const issues = [];
  const bold = (text.match(/\*\*/g) || []).length / 2;
  const perK = (bold / text.length) * 1000;
  if (perK > 1.2) issues.push(`bold ${bold} (${perK.toFixed(1)}/1000 chars, keep under 1.2)`);
  for (const h of FIXED_HEADINGS[lang]) if (text.includes(`${h}\n`)) issues.push(`fixed heading "${h}"`);
  for (const p of PHRASES[lang]) {
    // Essays («موضوع تعبير») are expected to have a conclusion; a literal trip may be called «رحلة» once.
    if (slug.startsWith('essay-') && CONCLUSION.includes(p)) continue;
    const n = lower.split(p).length - 1;
    if (n > (ONCE_OK.includes(p) ? 1 : 0)) issues.push(`"${p}" x${n}`);
  }
  const dashes = (text.match(/ — /g) || []).length;
  if (dashes > 2) issues.push(`em dashes x${dashes}`);
  return issues;
}

const slugs = readdirSync(`${DIR}/ar`).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3));
const arg = process.argv[2];

if (arg && arg !== '--list') {
  for (const lang of ['ar', 'en']) console.log(`${lang}: ${check(lang, arg).join('; ') || 'clean'}`);
  process.exit(0);
}

const rows = slugs
  .map((slug) => {
    const ar = check('ar', slug);
    const en = check('en', slug);
    return { slug, score: ar.length + en.length, ar, en };
  })
  .sort((a, b) => b.score - a.score);

if (arg === '--list') {
  const n = Number(process.argv[3]) || 10;
  for (const r of rows.filter((r) => r.score > 0).slice(0, n)) console.log(r.slug);
  process.exit(0);
}

const flagged = rows.filter((r) => r.score > 0);
console.log(`articles: ${rows.length} | still machine-like: ${flagged.length} | clean: ${rows.length - flagged.length}`);
for (const r of flagged.slice(0, 15)) console.log(`${r.score.toString().padStart(3)}  ${r.slug}\n     ar: ${r.ar.join('; ') || '-'}\n     en: ${r.en.join('; ') || '-'}`);
