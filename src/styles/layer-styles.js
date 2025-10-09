import { defineLayerStyles } from "@pandacss/dev"

export const layerStyles = defineLayerStyles({
  headerLayout: {
    description:
      "The basic styles for the header, common to its presentation in any layout.",
    value: {
      mt: "headerAndFooterYMargin",
      borderTop: "3px solid black",
      flexDirection: "column",
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
  navMenuButtonAndList: {
    description:
      "The basic styles for the button and list itens, so they have the same layout.",
    value: {
      p: ["10px", undefined, undefined, "10px 30px"],
    },
  },
})
