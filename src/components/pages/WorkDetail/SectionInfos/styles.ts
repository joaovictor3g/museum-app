import { styled } from "@/styles";

export const Box = styled("section", {
  display: "flex",
  gap: "1rem",

  fontFamily: "var(--inter)",

  ".work-infos": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    paddingBottom: "2rem",

    borderBottom: "1px solid $gray90",
    height: "max-content",

    ".category": {
      fontSize: "1rem",
    },

    ".title": {
      fontFamily: "var(--pp-hatton)",
      fontWeight: 700,
      fontSize: "$2xl",
      color: "$gray10",
    },

    ".createAt": {
      fontSize: "$md",
      fontWeight: 400,
      color: "$gray40",
    },

    ".artist": {
      borderRadius: "$md",
      border: "1px solid $gray90",
      padding: "1rem",

      display: "flex",
      flexDirection: "column",

      "&-name": {
        color: "$gray10",
        fontSize: "1.125rem",
        fontWeight: 500,
      },
    },

    ".badge-domain": {
      backgroundColor: "$primary40",
      borderRadius: 4,
      width: "max-content",
      padding: "0.5rem 1rem",
      color: "$gray90",
    },
  },
});
