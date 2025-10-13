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
      mx: "auto",
      px: "20px",
    },
  },
  navMenuButtonAndList: {
    description:
      "The basic styles for the menu button and list itens, so they have the same layout.",
    value: {
      p: ["10px", undefined, undefined, "10px 30px"],
    },
  },
  basicText: {
    description: "The basic styles for content texts.",
    value: {
      mb: "20px",
    },
  },
  basicListsUnordered: {
    description: "The basic styles for content unordered lists.",
    value: {
      "& li": { listStyleType: "disc" },
    },
  },
  basicListsOrdered: {
    description: "The basic styles for content ordered lists.",
    value: {
      "& li": { listStyleType: "decimal" },
    },
  },
  basicLists: {
    description: "The basic styles for content lists.",
    value: {
      "& li": {
        listStylePosition: "inside",
        "&:not(:last-child)": {
          mb: "20px",
        },
        "& ol": { mt: "20px", ml: "20px" },
      },
    },
  },
})
