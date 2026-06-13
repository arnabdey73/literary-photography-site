import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Anonymous'),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['general', 'literary']).default('general'),
    featured: z.boolean().default(false),
  }),
});

const photography = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string(),
    altText: z.string(),
    camera: z.string().optional(),
    location: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    available_for_print: z.boolean().default(true),
    // Poetry-as-caption: a short verse shown with the photograph (the "plate").
    verse: z.string().optional(),
    // Optionally link a full poem from the poetry collection.
    poemRef: reference('poetry').optional(),
  }),
});

const poetry = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    // Poetic form, e.g. "Haiku", "Sonnet", "Free verse".
    form: z.string().optional(),
    // Group poems into a named series/collection.
    series: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    // Optionally pair this poem with a photograph (slug of a photography entry).
    photoRef: reference('photography').optional(),
  }),
});

export const collections = {
  'blog': blog,
  'photography': photography,
  'poetry': poetry,
};
