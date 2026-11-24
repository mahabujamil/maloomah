// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-24';

export const TRENDING: string[] = [
  'human-nervous-system',
  'essay-about-mother',
  'arabic-language-quiz-questions-and-answers',
  'school-radio-about-time',
  'essay-about-science',
  'who-is-al-razi',
  'school-radio-about-honesty',
  'mesopotamian-civilization',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
