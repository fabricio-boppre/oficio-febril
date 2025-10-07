import { defineLayerStyles } from "@pandacss/dev"

export const layerStyles = defineLayerStyles({
  headerLayout: {
    description:
      "The basic styles for the header, common to its presentation in any layout.",
    value: {
      mt: "headerAndFooterYMargin",
      borderTop: "3px solid black",
    },
  },
  mainLayout: {
    description:
      "The basic styles for the main, common to its presentation in any layout.",
    value: {
      maxW: "maxWidth",
      m: "0 auto",
      px: "20px",
    },
  },
})
