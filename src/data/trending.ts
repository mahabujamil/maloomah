// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-26';

export const TRENDING: string[] = [
  'school-radio-about-reading',
  'milky-way-galaxy',
  'environment-quiz-questions-and-answers',
  'school-radio-about-the-environment',
  'essay-about-technology',
  'who-invented-the-printing-press',
  'human-nervous-system',
  'essay-about-mother',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
