import { styled } from "@/styles";

export const HeaderContainer = styled("header", {
  background: "rgba(255, 255, 255, 0.005)",
  height: 80,
  transition: "height 0.2s",

  ".fixed": {
    borderBottom: "1px solid $gray90",
    backdropFilter: "blur(24px)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
  },

  ".header-wrapper": {
    padding: "1.5rem 0.5rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  "&.mobile-menu-open": {
    height: "300px",

    ".fixed": {
      height: "inherit",
    },

    nav: {
      height: "220px",
      display: "initial",
      placeSelf: "middle",
      gridColumnEnd: "span 2",

      ul: {
        width: "100%",
        height: "inherit",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",

        li: {
          width: "100%",
        },
      },
    },
  },

  "@md": {
    ".header-wrapper": {
      padding: "1rem",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
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
      fontFamily: "var(--inter)",

      "&.active": {
        color: "$primaryMain",
      },

      "&:hover:not(.active)": {
        color: "$gray10",
      },
    },
  },

  "@md": {
    display: "none",
  },
});

export const MobileMenu = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  color: "$gray10",
  justifySelf: "end",
  lineHeight: 0,
  display: "none",

  "@md": {
    display: "initial",
  },
});

export const Overlay = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100%",
  background: "rgba(0,0,0,0.5)",
  overflow: "hidden",
});
