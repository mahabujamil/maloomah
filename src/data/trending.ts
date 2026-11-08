// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-08';

export const TRENDING: string[] = [
  'school-radio-about-world-childrens-day',
  'essay-about-pollution',
  'who-is-ibn-khaldun',
  'school-radio-about-tolerance',
  'essay-about-water',
  'human-digestive-system',
  'benefits-of-olive-oil',
  'king-fahd-causeway',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
