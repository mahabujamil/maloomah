// «ترند اليوم» — the trending block at the top of the home page.
// Update it every time new trend articles go live: put the newest/hottest slugs first
// (each slug must exist in both languages) and bump TRENDING_UPDATED.
export const TRENDING_UPDATED = '2026-10-25';

export const TRENDING: string[] = [
  'what-is-a-thunderstorm',
  'how-to-save-electricity-at-home',
  'who-invented-playstation',
  'what-is-daylight-saving-time',
  'sahlab-recipe',
  'how-are-exchange-rates-determined',
  'difference-between-virus-worm-trojan',
  'what-is-chatgpt',
];

export const isTrending = (slug: string) => TRENDING.includes(slug);
