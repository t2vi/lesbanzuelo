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

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/videos" }),
  schema: z.object({
    title: z.string(),
    embedCode: z.string(),
    body: z.string().optional(),
  }),
});

const music = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/music" }),
  schema: z.object({
    title: z.string(),
    embedCode: z.string(),
    body: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/pages" }),
  schema: z.object({
    title: z.string(),
    
  }),
});
 
// Export all collections
export const collections = {works, pages, videos, music};