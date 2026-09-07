import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string({ message: "Le titre est obligatoire" }),
    date: z.coerce.date({ message: "La date doit être valide" }),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    thumbnail: z.string().optional(),
  }),
});
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string({ message: "Le titre est obligatoire" }),
    date: z.coerce.date({ message: "La date doit être valide" }),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  articles,
  pages,
};
