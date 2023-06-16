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
      grayMain: "rgb(25, 31, 36)",
      gray100: "rgb(35, 37, 39)",
      gray90: "rgb(59, 63, 67)",
      gray80: "rgb(81, 87, 92)",
      gray70: "rgb(102, 108, 114)",
      gray60: "rgb(123, 130, 136)",
      gray50: "rgb(145, 152, 158)",
      gray40: "rgb(169, 175, 180)",
      gray30: "rgb(190, 195, 199)",
      gray20: "rgb(213, 216, 219)",
      gray10: "rgb(236, 237, 238)",

      primaryMain: "rgb(225, 198, 175)",
      primary100: "rgb(68, 54, 42)",
      primary90: "rgb(90, 71, 55)",
      primary80: "rgb(111, 90, 71)",
      primary70: "rgb(133, 109, 89)",
      primary60: "rgb(154, 129, 109)",
      primary50: "rgb(174, 150, 131)",
      primary40: "rgb(193, 172, 155)",
      primary30: "rgb(212, 195, 182)",
      primary20: "rgb(229, 218, 210)",
      primary10: "rgb(246, 242, 239)",
    },

    fontSizes: {
      sm: "0.75rem", // 12px
      md: "0.875rem", // 14px
      normal: "1rem", // 16px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px,
      "2xl": "2rem", // 32px
      "4xl": "4rem",
    },

    radii: {
      md: "0.5rem",
      full: "9999px",
    },
  },

  media: {
    sm: "(max-width: 500px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1000px)",
  },
});
