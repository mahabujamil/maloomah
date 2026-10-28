// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-10-28';

export const TRENDING: string[] = [
  'madrasati-platform',
  'how-are-weather-forecasts-made',
  'how-are-fuel-prices-set-in-uae',
  'ballon-d-or',
  'what-is-twitch',
  'smart-electricity-meter',
  'el-clasico-history',
  'gold-karats-difference',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
