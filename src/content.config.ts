import { z, reference, defineCollection } from "astro:content"
import { glob, file } from "astro/loaders"

const cliches = defineCollection({
  loader: file("./src/content/cliches/cliches.json"),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      autor: z.string(),
      imagem: image(),
    }),
})

export const collections = {
  cliches,
}
