// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Arabic is the default language (served at /), English lives under /en/.
// Both languages share the same slugs, so /articles/x/ <-> /en/articles/x/.
export default defineConfig({
  site: 'https://maloomah.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ar', locales: { ar: 'ar', en: 'en' } },
      filter: (page) => !/\/search\/$/.test(page),
    }),
  ],
});
