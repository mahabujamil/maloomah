// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-05';

export const TRENDING: string[] = [
  'types-of-headaches',
  'benefits-of-quitting-smoking',
  'make-money-from-phone',
  'khamsat-and-mostaql-guide',
  'what-is-a-low-pressure-system',
  'champions-league-new-format-explained',
  'why-does-gold-price-rise',
  'how-are-exchange-rates-determined',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
