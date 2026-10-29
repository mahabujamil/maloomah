// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-10-29';

export const TRENDING: string[] = [
  'what-is-instapay',
  'uae-national-day',
  'what-is-the-nba',
  'madrasati-platform',
  'how-are-weather-forecasts-made',
  'how-are-fuel-prices-set-in-uae',
  'ballon-d-or',
  'what-is-twitch',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
