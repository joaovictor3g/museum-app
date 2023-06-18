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

  main: {
    minHeight: "calc(100vh - 160px)", // 160px Header height + Footer height
  },

  button: {
    cursor: "pointer",
  },
});
