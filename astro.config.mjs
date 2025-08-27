// @ts-check
import { defineConfig } from "astro/config"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  vite: { server: { allowedHosts: ["macleod.local"] } },
  site: "https://www.oficiofebril.com.br",
  integrations: [mdx()],
})
