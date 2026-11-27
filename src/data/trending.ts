// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-27';

export const TRENDING: string[] = [
  'who-is-ibn-al-nafis',
  'facts-about-bees',
  'essay-about-time',
  'school-radio-about-reading',
  'milky-way-galaxy',
  'environment-quiz-questions-and-answers',
  'school-radio-about-the-environment',
  'essay-about-technology',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
