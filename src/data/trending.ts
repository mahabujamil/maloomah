// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-10';

export const TRENDING: string[] = [
  'school-radio-about-cleanliness',
  'who-invented-the-airplane',
  'essay-about-reading',
  'school-radio-about-science',
  'ancient-egyptian-civilization',
  'animal-quiz-questions-and-answers',
  'school-radio-about-world-childrens-day',
  'essay-about-pollution',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
