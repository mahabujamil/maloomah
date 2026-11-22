// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-22';

export const TRENDING: string[] = [
  'school-radio-about-honesty',
  'mesopotamian-civilization',
  'geography-quiz-questions-and-answers',
  'essay-about-arabic-language',
  'facts-about-the-sun',
  'newtons-laws-of-motion',
  'school-radio-about-good-manners',
  'essay-about-friendship',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
