import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  html: {
    scrollBehavior: "smooth",
  },

  body: {
    backgroundColor: "$grayMain",
    color: "$gray30",
    minHeight: "100vh",
  },

  button: {
    cursor: "pointer",
  },
});
