// Article photos: src/assets/articles/<slug>.jpg plus credits in src/data/images.json
// (added with scripts/images.mjs). One photo per slug, shared by both languages.
import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import credits from '../data/images.json';
import { SITE, type Lang } from '../site';

type Credit = {
  alt: Record<Lang, string>;
  title: string;
  creator: string;
  creatorUrl: string;
  license: string;
  licenseUrl: string;
  source: string;
};
export type Cover = Credit & { src: ImageMetadata };

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/articles/*.{jpg,jpeg,png,webp}', {
  eager: true,
});
const bySlug = new Map(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace(/\.\w+$/, ''), mod.default]),
);

export function coverFor(slug: string): Cover | undefined {
  const src = bySlug.get(slug);
  const credit = (credits as Record<string, Credit>)[slug];
  return src && credit ? { ...credit, src } : undefined;
}

/** A 1200×630 JPEG of the article photo for social sharing and structured data (absolute URL). */
export async function shareImageUrl(slug: string) {
  const cover = coverFor(slug);
  if (!cover) return undefined;
  const img = await getImage({ src: cover.src, width: 1200, height: 630, fit: 'cover', format: 'jpg', quality: 80 });
  return new URL(img.src, SITE.url).href;
}
