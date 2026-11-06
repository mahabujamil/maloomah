// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-06';

export const TRENDING: string[] = [
  'benefits-of-olive-oil',
  'king-fahd-causeway',
  'fiverr-guide',
  'upwork-guide',
  'what-is-a-thunderstorm',
  'types-of-headaches',
  'benefits-of-quitting-smoking',
  'make-money-from-phone',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
