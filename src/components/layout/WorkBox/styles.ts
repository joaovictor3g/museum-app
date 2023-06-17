import { styled } from "@/styles";

export const Box = styled("div", {
  backgroundColor: "$gray100",
  border: "1px solid $gray90",
  width: "100%",

  display: "flex",
  flexDirection: "column",
  borderRadius: "$md",
  overflow: "hidden",
  padding: 24,
  gap: "1rem",
  fontFamily: "var(--inter)",

  img: {
    borderRadius: "inherit",
    width: "100%",
  },

  ".infos": {
    display: "flex",
    flexDirection: "column",
    fontWeight: 500,
    fontStyle: "normal",
    textDecoration: "none",
    color: "$gray10",

    ".title": {
      fontSize: "$lg",
      fontWeight: 500,
    },

    ".author": {
      fontSize: "$md",
      color: "$gray30",
    },

    "&:hover": {
      textDecoration: "underline",
    },
  },
});
