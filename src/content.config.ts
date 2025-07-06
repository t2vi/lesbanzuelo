import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/works" }),
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
    heroImage: z.string(),
    attachments: z.array(z.string()).optional(),
  }),
});

const music = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/music" }),
  schema: z.object({
    title: z.string(),
    embedCode: z.string(),
    body: z.string().optional(),
    project: z.string(),
    type: z.enum(['youtube', 'spotify', 'soundcloud', 'bandcamp']).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: "./src/data/pages" }),
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
  }),
});
 
// Export all collections
export const collections = { works, pages, music };