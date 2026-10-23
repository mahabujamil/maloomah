// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://maloomah.com';

// Article URL -> last modified date (frontmatter `updated`, else `date`), so the sitemap tells
// Google exactly which pages changed. Other pages get the build time, since they list new content.
const lastmod = new Map();
for (const lang of ['ar', 'en']) {
  const dir = new URL(`./src/content/articles/${lang}/`, import.meta.url);
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const src = readFileSync(new URL(file, dir), 'utf8');
    const date = (src.match(/^updated:\s*(\S+)/m) ?? src.match(/^date:\s*(\S+)/m))?.[1];
    if (date) lastmod.set(`${SITE}${lang === 'ar' ? '' : '/en'}/articles/${file.slice(0, -3)}/`, new Date(date).toISOString());
  }
}
const buildTime = new Date().toISOString();

// Arabic is the default language (served at /), English lives under /en/.
// Both languages share the same slugs, so /articles/x/ <-> /en/articles/x/.
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ar', locales: { ar: 'ar', en: 'en' } },
      filter: (page) => !/\/search\/$/.test(page),
      serialize(item) {
        item.lastmod = lastmod.get(item.url) ?? buildTime;
        return item;
      },
    }),
  ],
});
