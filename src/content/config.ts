import { defineCollection, z } from "astro:content";

const pielegnacja = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    authorBio: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
    kicker: z.string().optional(),
  }),
});

export const collections = { pielegnacja };
