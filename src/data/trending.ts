// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-11-04';

export const TRENDING: string[] = [
  'what-is-a-low-pressure-system',
  'champions-league-new-format-explained',
  'benefits-of-eggs',
  'make-money-online-without-capital',
  'are-money-making-apps-real',
  'why-does-gold-price-rise',
  'how-does-rain-form',
  'instagram-monetization',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
