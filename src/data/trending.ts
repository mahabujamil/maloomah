// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-09';

export const TRENDING: string[] = [
  'school-radio-about-science',
  'ancient-egyptian-civilization',
  'animal-quiz-questions-and-answers',
  'school-radio-about-world-childrens-day',
  'essay-about-pollution',
  'who-is-ibn-khaldun',
  'school-radio-about-tolerance',
  'essay-about-water',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
