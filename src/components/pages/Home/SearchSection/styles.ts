import { styled, keyframes } from "@/styles";

const showUp = keyframes({
  "0%": {
    transform: "translateX(200px)",
    opacity: 0,
  },

  "25%": {
    transform: "translateX(150px)",
  },

  "50%": {
    transform: "translateX(100px)",
  },

  "75%": {
    transform: "translateX(50px)",
  },

  "100%": {
    transform: "translateX(0)",
    opacity: 1,
  },
});

export const SearchSectionContainer = styled("section", {
  paddingTop: "13.5rem",

  ".hint": {
    fontFamily: "var(--pp-hatton)",
    textAlign: "center",
    fontSize: "$2xl",

    maxWidth: 700,
    width: "100%",
    margin: "0 auto 72px",

    ".highlight": {
      color: "$primaryMain",
    },

    "&.hidden": {
      opacity: 0,
    },

    "&.on-view": {
      animation: `${showUp} 1s linear`,
    },
  },

  "@md": {
    padding: "1rem",

    ".hint": {
      borderTop: "1px solid $gray90",
      paddingTop: "2rem",
      fontSize: "$xl",
    },
  },
});
