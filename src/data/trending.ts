// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-07';

export const TRENDING: string[] = [
  'school-radio-about-tolerance',
  'essay-about-water',
  'human-digestive-system',
  'benefits-of-olive-oil',
  'king-fahd-causeway',
  'fiverr-guide',
  'upwork-guide',
  'what-is-a-thunderstorm',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
