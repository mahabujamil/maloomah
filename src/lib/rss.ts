import rss from '@astrojs/rss';
import { articleUrl, getArticles, slugOf } from './content';
import { CATEGORIES, SITE, type Lang } from '../site';

export async function feed(lang: Lang) {
  const articles = await getArticles(lang);
  return rss({
    title: SITE.name[lang],
    description: SITE.description[lang],
    site: SITE.url,
    trailingSlash: true,
    customData: `<language>${lang}</language>`,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.date,
      link: articleUrl(lang, slugOf(a)),
      categories: [CATEGORIES[a.data.category].name[lang], ...a.data.tags],
    })),
  });
}
