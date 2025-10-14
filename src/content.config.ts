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

const artistas = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/artistas" }),
  schema: ({ image }) =>
    z.object({
      nome: z.string(),
    }),
})

const processosArtisticos = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/processos-artisticos",
  }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      rascunho: z.boolean(),
      destaque_na_capa: z.boolean(),
      imagem_para_indice: image(),
      descricao: z.string(),
      data_da_publicacao: z.coerce.date(),
      artistas: z.array(reference("artistas")),
    }),
})

export const collections = {
  cliches,
  artistas,
  processosArtisticos,
}
