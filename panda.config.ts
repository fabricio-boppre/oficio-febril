import { defineConfig } from "@pandacss/dev"
import { textStyles } from "@styles/text-styles"
import { layerStyles } from "@styles/layer-styles"

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
      layerStyles,
      breakpoints: {
        sm: "421px",
        md: "561px",
        lg: "769px",
        xl: "1001px",
      },
      tokens: {
        sizes: {
          maxWidth: { value: "1000px" },
        },
        spacing: {
          headerAndFooterYMargin: { value: "20px" },
          basicContentBlockBottomMartin: { value: "20px" },
        },
        colors: {
          grayFont: { value: "#9f9c9cff" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
})
