import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      poster: z.number().optional().default(0),
      images: z
        .array(
          z.object({
            src: z.preprocess((val) => `./${val}`, image()),
            alt: z.string().optional().default(''),
            caption: z.record(z.string(), z.string()).optional()
          })
        )
        .optional()
    })
});

const activity = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/activity' }),
  schema: ({ image }) =>
    z.object({
      src: z.preprocess((val) => `./${val}`, image()),
      title: z.string().nonempty()
    })
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: 'src/content/gallery' }),
  schema: ({ image }) =>
      z
        .object({
          src: z.preprocess((val) => `./${val}`, image()),
          alt: z.string().optional().default(''),
          caption: z.record(z.string(), z.string()).nullish()
        })
        .catchall(z.union([z.string(), z.number(), z.boolean()]))
        .array()
});

export const collections = {
  news,
  activity,
  gallery
};
