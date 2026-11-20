// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-20';

export const TRENDING: string[] = [
  'school-radio-about-good-manners',
  'essay-about-friendship',
  'vertebrates-and-invertebrates',
  'school-radio-about-bullying',
  'what-is-a-food-chain',
  'who-invented-the-internet',
  'school-radio-about-health-and-nutrition',
  'what-is-photosynthesis',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
