import { defineConfig } from "@pandacss/dev"
import { textStyles } from "@styles/text-styles"

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
      textStyles,
      breakpoints: {
        sm: "420px",
        md: "560px",
        lg: "768px",
        xl: "1000px",
      },
      tokens: {
        sizes: {
          maxWidth: { value: "1000px" },
        },
        colors: {
          basicGray: { value: "#bbbbbb" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
})
