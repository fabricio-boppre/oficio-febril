import { defineTextStyles } from "@pandacss/dev"

export const textStyles = defineTextStyles({
  navMenuButtonAndList: {
    description:
      "The basic styles for the button and list itens, so they have the same layout.",
    value: {
      fontFamily: "DirectaSerifSemiBold, Georgia, serif",
      fontSize: ["1rem", undefined, "1.2rem"],
      lineHeight: ["20px", undefined, "24px"],
    },
  },
})
