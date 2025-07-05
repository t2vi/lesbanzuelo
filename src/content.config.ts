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

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/pages" }),
  schema: z.object({
    name: z.string(),
  }),
});

// const imageInfo = defineCollection({
//   loader: file("src/data/imageInfo.json"),
// });
 
// Export all collections
export const collections = {works, pages};

// published: true
// title: Alien digital print
// heroImage: src/data/images/alien-digital-print.webp
// attachments:
//   - src/data/images/alien-digital-print.webp