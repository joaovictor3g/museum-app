import { styled } from "@/styles";

export const HeaderContainer = styled("header", {
  background: "rgba(255, 255, 255, 0.005)",
  borderBottom: "1px solid $gray90",
  backdropFilter: "blur(24px)",

  ".header-wrapper": {
    padding: "1.5rem 0.5rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    ".fixed": {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
    },
  },

  "@md": {
    ".header-wrapper": {
      padding: "1rem",
    },
  },
});

export const Nav = styled("nav", {
  ul: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    gap: "2.5rem",
    textTransform: "uppercase",

    "li a": {
      textDecoration: "none",
      color: "$gray30",
      fontWeight: 500,
      fontSize: "$md",

      "&.active": {
        color: "$primaryMain",
      },
    },
  },

  "@md": {
    display: "none",
  },
});
