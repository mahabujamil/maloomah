import { getCollection, type CollectionEntry } from 'astro:content';
import { localePath, type CategoryId, type Lang } from '../site';

export type Article = CollectionEntry<'articles'>;
export type Page = CollectionEntry<'pages'>;

// Entry ids look like "ar/why-is-the-sky-blue".
export const langOf = (entry: { id: string }) => entry.id.split('/')[0] as Lang;
export const slugOf = (entry: { id: string }) => entry.id.split('/').slice(1).join('/');

export const articleUrl = (lang: Lang, slug: string) => localePath(lang, `/articles/${slug}/`);
export const categoryUrl = (lang: Lang, id: CategoryId) => localePath(lang, `/category/${id}/`);

/** Published articles in one language, newest first. Drafts only show in `npm run dev`. */
export async function getArticles(lang: Lang) {
  const entries = await getCollection(
    'articles',
    (e) => langOf(e) === lang && (import.meta.env.DEV || !e.data.draft),
  );
  return entries.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime() || slugOf(a).localeCompare(slugOf(b)),
  );
}

export async function getPages(lang: Lang) {
  return getCollection('pages', (e) => langOf(e) === lang);
}

/** Slugs that exist in the given language — used to only link translations that are real. */
export async function slugSet(lang: Lang) {
  return new Set((await getArticles(lang)).map(slugOf));
}

/** Same category first, then the newest of the rest. */
export function relatedArticles(all: Article[], current: Article, count = 3) {
  const others = all.filter((a) => a.id !== current.id);
  const same = others.filter((a) => a.data.category === current.data.category);
  const rest = others.filter((a) => a.data.category !== current.data.category);
  return [...same, ...rest].slice(0, count);
}
