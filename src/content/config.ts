import { defineCollection, z } from 'astro:content';

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
  }),
});

export const collections = {
  'blog': blog,
  'photography': photography,
};
