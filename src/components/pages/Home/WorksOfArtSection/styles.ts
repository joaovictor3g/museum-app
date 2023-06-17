import { Wrapper } from "@/components/styled";
import { styled } from "@/styles";

export const WorksOfArtSectionContainer = styled("section", {
  marginTop: 216,
  padding: "2rem 0",
});

export const Box = styled(Wrapper, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "4rem",

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
