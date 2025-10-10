import { z, reference, defineCollection } from "astro:content"
import { glob, file } from "astro/loaders"

const cliches = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/cliches" }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      descricao: z.string(),
      imagem: image(),
    }),
})

export const collections = {
  cliches,
}
