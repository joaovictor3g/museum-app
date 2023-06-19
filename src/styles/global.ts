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
    "--min-height": "calc(100vh - 240px)", // 160px Header height + Footer height + marginBottom
    minHeight: "var(--min-height)",
    marginBottom: 80,
  },

  button: {
    cursor: "pointer",
  },
});
