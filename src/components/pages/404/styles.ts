import { styled } from "@/styles";

export const NotFoundContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2rem",
  position: "relative",

  height: "var(--min-height)",

  fontFamily: "var(--inter)",

  img: {
    width: "100%",
    objectFit: "contain",
  },

  ".text-content": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",

    h1: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: "34px",
      color: "$gray20",
    },

    span: {
      fontWeight: 400,
      fontSize: "1.125rem",
      lineHeight: "22px",
      color: "$gray40",
    },
  },

  ".back-home": {
    color: "$primaryMain",
    border: "1px solid currentColor",
    backgroundColor: "transparent",
    borderRadius: 4,
    padding: "1rem 1.5rem",

    fontSize: "$md",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "17px",
    transition: "background-color 0.2s, color 0.2s",
    textDecoration: "none",

    "&:hover": {
      backgroundColor: "$primaryMain",
      color: "$gray100",
    },
  },

  "@md": {
    padding: "0 1rem",

    ".text-content": {
      h1: {
        fontSize: "$lg",
      },

      span: {
        fontSize: "$md",
      },
    },
  },
});
