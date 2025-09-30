import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ],

  // Files to exclude
  exclude: [],

  // Remove the default design tokens injected by Panda
  presets: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: "560px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1536px",
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
})
