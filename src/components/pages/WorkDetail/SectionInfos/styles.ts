import { styled } from "@/styles";

export const Box = styled("section", {
  display: "grid",
  gridTemplateColumns: "1fr 390px",
  gap: "1rem",

  fontFamily: "var(--inter)",

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    ".favorite": {
      border: "none",
      backgroundColor: "transparent",
      color: "$gray40",

      "&.favorited": {
        color: "$primaryMain",
      },
    },
  },

  ".work-infos": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    paddingBottom: "2rem",

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

      "&.private": {
        backgroundColor: "$primary100",
        color: "$primary10",
      },
    },

    ".separator": {
      margin: "38px 0",
      width: "100%",
      height: 1,
      backgroundColor: "$gray90",
    },
  },

  "@xl": {
    padding: "1rem",
    gridTemplateColumns: "1fr",
  },
});
