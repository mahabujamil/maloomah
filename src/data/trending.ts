// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-10-30';

export const TRENDING: string[] = [
  'crocodile-facts',
  'hot-vs-cold-crypto-wallet',
  'facebook-monetization',
  'make-money-with-ai',
  'what-is-a-thunderstorm',
  'what-is-instapay',
  'what-is-the-nba',
  'madrasati-platform',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
