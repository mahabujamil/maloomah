// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-10-23';

export const TRENDING: string[] = [
  'what-is-cryptocurrency',
  'ways-to-earn-money-online',
  'youtube-monetization',
  'tiktok-monetization',
  'make-money-from-crypto',
  'receiver-iptv-server-codes',
  'google-adsense-guide',
  'what-is-artificial-intelligence',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
