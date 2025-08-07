import { z, reference, defineCollection } from "astro:content"
import { glob } from "astro/loaders"

const eventos = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/eventos" }),
  schema: ({ image }) =>
    z.object({
      nome: z.string(),
      imagem_ilustrativa: image(),
      descricao: z.string(),
      data_de_publicacao: z.date(),
    }),
})
export const collections = {
  eventos,
}
