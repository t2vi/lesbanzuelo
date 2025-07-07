import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/works" }),
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
    heroImage: z.string().optional(),
    type: z.string().optional(),
    attachments: z.array(z.string()).optional(),
  }),
});

const music = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/music" }),
  schema: z.object({
    title: z.string(),
    heroImage: z.string().optional(),
    embedCode: z.string().optional(),
    body: z.string().optional(),
    project: z.string().optional(),
    type: z.enum(['youtube', 'spotify', 'soundcloud', 'bandcamp']).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: "./src/data/pages" }),
  schema: z.object({
    title: z.string(),
    header: z.string().optional(),
    body: z.string().optional().optional(),
  }),
});
 
// Export all collections
export const collections = { works, pages, music };