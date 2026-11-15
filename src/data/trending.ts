// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-15';

export const TRENDING: string[] = [
  'school-radio-about-the-teacher',
  'how-many-continents-in-the-world',
  'essay-about-love-of-homeland',
  'school-radio-about-winter',
  'space-quiz-questions-and-answers',
  'who-is-ibn-battuta',
  'school-radio-about-volunteering',
  'essay-about-honesty',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
