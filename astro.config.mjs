// @ts-check
import { defineConfig } from "astro/config"

import mdx from "@astrojs/mdx"

import pageInsight from "astro-page-insight";

import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  vite: { server: { allowedHosts: ["macleod.local"] } },
  site: "https://www.oficiofebril.com.br",
  integrations: [mdx(), pageInsight(), metaTags()],
})