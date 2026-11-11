// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-11';

export const TRENDING: string[] = [
  'school-radio-about-arabic-language',
  'essay-about-winter',
  'human-respiratory-system',
  'school-radio-about-cleanliness',
  'who-invented-the-airplane',
  'essay-about-reading',
  'school-radio-about-science',
  'ancient-egyptian-civilization',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
