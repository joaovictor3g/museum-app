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
    colors: {},

    fontSizes: {
      sm: "0.75rem", // 12px
      md: "0.875rem", // 14px
      normal: "1rem", // 16px
      lg: "1.25rem", // 20px
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

export { globalStyles } from "./global";
