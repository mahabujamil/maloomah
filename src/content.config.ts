import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_IDS } from './site';

// Articles: src/content/articles/<lang>/<slug>.md
// The same <slug> in ar/ and en/ means the two files are translations of each other.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    category: z.enum(CATEGORY_IDS),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // The search queries this article targets (from keyword research). Used in structured data.
    keywords: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // Recipes only: becomes Recipe structured data (rich results with photo, time and ingredients in Google).
    recipe: z
      .object({
        prepTime: z.string(), // ISO 8601 duration, e.g. PT20M
        cookTime: z.string(),
        yield: z.string(),
        cuisine: z.string().optional(),
        type: z.string().optional(), // e.g. "حلويات" / "Dessert"
        ingredients: z.array(z.string()),
        steps: z.array(z.string()),
      })
      .optional(),
  }),
});

// Static pages (about, contact, privacy, terms): src/content/pages/<lang>/<slug>.md
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { articles, pages };
