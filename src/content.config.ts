import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  author: z.string().default("Redação"),
  keywords: z.array(z.string()).default([]),
  draft: z.boolean().default(true),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  canonical: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: baseSchema,
});

const glossario = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/glossario" }),
  schema: baseSchema.extend({
    related: z.array(z.string()).default([]),
    products: z.array(z.string()).default([]),
  }),
});

const comparar = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/comparar" }),
  schema: baseSchema.extend({
    products: z.array(z.string()).min(2),
    tableRows: z
      .array(
        z.object({
          label: z.string(),
          values: z.array(z.string()),
        })
      )
      .optional(),
    verdict: z.string().optional(),
  }),
});

const review = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/review" }),
  schema: baseSchema.extend({
    product: z.string(),
    brand: z.string(),
    rating: z.number().min(1).max(5),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    verdict: z.string(),
    buyLink: z.string().optional(),
  }),
});

export const collections = { blog, glossario, comparar, review };
