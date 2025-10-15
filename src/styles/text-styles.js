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
  basicHeading1: {
    description: "The basic styles for content h1 headings.",
    value: {
      fontFamily: "DirectaSerifSemiBold, Georgia, serif",
      fontSize: ["1.8rem", undefined, "2.4rem"],
      lineHeight: ["36px", undefined, "48px"],
      "& a": { textDecoration: "underline" },
    },
  },
  basicHeading2: {
    description: "The basic styles for content h2 headings.",
    value: {
      fontFamily: "DirectaSerifSemiBold, Georgia, serif",
      fontSize: ["1.6rem", undefined, "2rem"],
      lineHeight: ["32px", undefined, "40px"],
    },
  },
  basicHeading3: {
    description: "The basic styles for content h3 headings.",
    value: {
      fontFamily: "DirectaSerifSemiBold, Georgia, serif",
      fontSize: ["1.4rem", undefined, "1.6rem"],
      lineHeight: ["28px", undefined, "32px"],
    },
  },
  basicHeading4: {
    description: "The basic styles for content h4 headings.",
    value: {
      fontFamily: "DirectaSerifSemiBold, Georgia, serif",
      fontSize: ["1.2rem", undefined, "1.4rem"],
      lineHeight: ["28px", undefined, "32px"],
    },
  },
  basicText: {
    description: "The basic styles for content texts.",
    value: {
      fontFamily: "DirectaSerifLight, Georgia, serif",
      fontSize: ["1rem", undefined, "1.2rem"],
      lineHeight: ["24px", undefined, "28px"],
      "& a": { textDecoration: "underline" },
    },
  },
  spanText: {
    description: "The basic styles for content span.",
    value: {
      fontFamily: "DirectaSerifLight, Georgia, serif",
      fontSize: ["0.8rem", undefined, "1rem"],
      lineHeight: ["20px", undefined, "24px"],
      "& a": { textDecoration: "underline" },
    },
  },
})
