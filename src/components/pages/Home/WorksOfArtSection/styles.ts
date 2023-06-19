import { Wrapper } from "@/components/styled";
import { styled, keyframes } from "@/styles";
import Link from "next/link";

const showUp = keyframes({
  "0%": {},

  "100%": {},
});

const slideIn = keyframes({
  "0%": {
    transform: "translateX(200px)",
    opacity: 0,
  },

  "25%": {
    transform: "translateX(100px)",
    opacity: 0,
  },

  "50%": {
    transform: "translateX(50px)",

    opacity: 0,
  },
  "100%": {
    transform: "translateX(0)",
    opacity: 1,
  },
});

const slideUp = keyframes({
  "0%": {
    transform: "translateY(200px)",
    opacity: 0,
  },
  "25%": {
    transform: "translateY(100px)",

    opacity: 0,
  },

  "50%": {
    transform: "translateY(100px)",

    opacity: 0,
  },
  "100%": {
    transform: "translateY(0)",
    opacity: 1,
  },
});

export const WorksOfArtSectionContainer = styled("section", {
  marginTop: 216,
  padding: "2rem 0",

  "@md": {
    marginTop: 50,
  },
});

export const Box = styled(Wrapper, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "4rem",

  ".searched-works": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
    padding: "0.5rem",

    ".results-pagination": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    strong: {
      color: "$gray30",
      fontWeight: 500,
      fontSize: "$xl",
      fontFamily: "var(--inter)",
    },

    ".grid": {
      "&.loading": {
        gridTemplateColumns: "1fr",
        placeContent: "center",
      },

      ".loading-container": {
        minHeight: 400,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },

  h1: {
    fontSize: "$lg",
    textTransform: "uppercase",
    fontStyle: "normal",
    fontWeight: 300,
    fontFamily: "var(--inter)",
    padding: "1rem",
    color: "$primary30",

    borderBottom: "1px solid $gray90",
  },

  ".mansory": {
    figure: {
      position: "relative",

      img: {
        transition: "opacity 0.2s",
      },

      ".work-info": {
        display: "none",
      },

      "&:hover": {
        background: "$grayMain",
        cursor: "pointer",

        img: {
          opacity: 0.6,
        },

        ".work-info": {
          display: "initial",
          position: "absolute",
          bottom: 10,
          left: 10,
          fontFamily: "var(--inter)",

          "&-name": {
            display: "block",
            fontWeight: 500,
            fontSize: "$xl",
            color: "$gray10",
          },

          "&-author": {
            fontWeight: 400,
            fontSize: "$normal",
            color: "$gray30",
          },
        },
      },
    },
  },
});

export const ImageLink = styled(Link, {
  display: "block",

  "&.hidden": {
    opacity: 0,
  },

  "&.on-view.even": {
    animation: `${slideIn} var(--time) ease-out`,
  },

  "&:not(.even).on-view": {
    animation: `${slideUp} var(--time) ease-out`,
  },
});
