import { createStitches } from "@stitches/react";

export const {
  styled,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  theme,
} = createStitches({
  theme: {
    colors: {
      grayMain: "#13171B",
      gray100: "#151A1E",
      gray90: "#252C31",
      gray80: "#323C43",
      gray70: "#43484C",
      gray60: "#7C8389",
      gray50: "#92989E",
      gray40: "#AAB0B5",
      gray30: "#BFC3C8",
      gray20: "#D6D9DB",
      gray10: "#ECEEEF",

      primaryMain: "#E2C6B0",
      primary100: "#45362A",
      primary90: "#5A4838",
      primary80: "#705A48",
      primary70: "#856E59",
      primary60: "#9A826D",
      primary50: "#AE9783",
      primary40: "#C2AD9C",
      primary30: "#D4C4B6",
      primary20: "#E6DBD2",
      primary10: "#F7F3F0",
    },

    fontSizes: {
      sm: "0.75rem", // 12px
      md: "0.875rem", // 14px
      normal: "1rem", // 16px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
      "2xl": "2rem", // 32px
      "4xl": "4rem", // 64px
    },

    radii: {
      md: "0.5rem",
      lg: "1rem",
      full: "9999px",
    },
  },

  media: {
    sm: "(max-width: 500px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1000px)",
  },
});
