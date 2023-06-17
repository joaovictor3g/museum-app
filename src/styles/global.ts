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

  WebkitScrollbar: {
    width: "10px",
    background: "#13171B",
  },

  WebkitScrollbarButton: {
    width: "8px",
    height: "5px",
  },

  WebkitScrollbarTrack: {
    background: "#13171B",
    border: "thin solid #1a1f25",
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
    borderRadius: "10px",
  },

  WebkitScrollbarThumb: {
    background: "#AE9783",
    border: "thin solid #232c34",
    borderRadius: "10px",
  },

  WebkitScrollbarThumbHover: {
    background: "#C2AD9C",
  },

  WebkitScrollbarThumbInactive: {
    background: "rgba(77,161,112,.6)",
  },

  button: {
    cursor: "pointer",
  },
});
