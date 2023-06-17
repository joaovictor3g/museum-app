import { styled } from "@/styles";

export const PaginationContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  button: {
    backgroundColor: "$gray90",
    border: "none",
    borderRadius: "$md",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 32,
    height: 32,

    color: "$gray300",

    "&:hover:not(:disabled)": {
      border: "1px solid $primaryMain",
      color: "$primaryMain",
      cursor: "pointer",

      transition: "0.5s border, 0.5s color",
    },

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.7,
    },
  },
});

export const PaginationNumbers = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 4,
  maxWidth: 170,
  overflow: "hidden",

  ".page-number": {
    fontFamily: "var(--inter)",
    fontSize: "$normal",
    fontWeight: 600,
    fontStyle: "normal",
    transition: "transform 0.2s",

    flexShrink: 0,
    // transform: "translateX(-34px)",

    '&[data-active="true"]': {
      border: "2px solid $primaryMain",
      color: "$primaryMain",
    },
  },
});

export const Arrows = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 2,
  zIndex: 1,

  button: {
    backgroundColor: "$gray90",

    "&:disabled": {
      color: "$gray50",
    },
  },
});
