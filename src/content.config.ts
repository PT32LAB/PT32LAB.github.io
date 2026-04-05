import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const dimensionsSchema = z.object({
  autonomy: z.number().min(0).max(1).optional(),
  tech_complexity: z.number().min(0).max(1).optional(),
  governance: z.number().min(0).max(1).optional(),
  economic: z.number().min(0).max(1).optional(),
  resilience: z.number().min(0).max(1).optional(),
  scalability: z.number().min(0).max(1).optional(),
}).optional();

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{en,es,ru,pt,fr,de,zh,ja}.{md,mdx}', base: './content' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    layout: z.enum(['home', 'prose', 'landing']).default('prose'),
    description: z.string(),
    type: z.string(),
    cluster: z.string(),
    status: z.string(),
    dimensions: dimensionsSchema,
    tags: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    geographic: z.string().optional(),
    landing: z.boolean().optional(),
    contributors: z.array(z.string()).optional(),
    date_created: z.coerce.string().optional(),
    date_updated: z.coerce.string().optional(),
  }),
});

export const collections = { pages };
