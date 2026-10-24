// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-10-24';

export const TRENDING: string[] = [
  'sahlab-recipe',
  'how-are-exchange-rates-determined',
  'difference-between-virus-worm-trojan',
  'what-is-daylight-saving-time',
  'what-is-chatgpt',
  'lentil-soup-recipe',
  'what-is-cryptocurrency',
  'ways-to-earn-money-online',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
