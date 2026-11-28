// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-28';

export const TRENDING: string[] = [
  'seven-wonders-of-the-ancient-world',
  'essay-about-the-teacher',
  'parts-of-a-cell',
  'who-is-ibn-al-nafis',
  'facts-about-bees',
  'essay-about-time',
  'school-radio-about-reading',
  'milky-way-galaxy',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
