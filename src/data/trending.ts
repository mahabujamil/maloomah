// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-10-31';

export const TRENDING: string[] = [
  'why-does-gold-price-rise',
  'how-does-rain-form',
  'instagram-monetization',
  'snapchat-monetization',
  'crocodile-facts',
  'hot-vs-cold-crypto-wallet',
  'facebook-monetization',
  'make-money-with-ai',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
