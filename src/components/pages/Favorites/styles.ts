import { Wrapper } from "@/components/styled";
import { styled } from "@/styles";

export const Box = styled(Wrapper, {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  ".page-title": {
    fontFamily: "var(--pp-hatton)",
    fontWeight: 700,
    fontSize: "2.5rem",
    color: "$gray10",
    fontStyle: "normal",
  },

  ".page-description": {
    fontFamily: "var(--inter)",
    fontWeight: 400,
    fontStyle: "normal",
    color: "$gray20",
    display: "block",
    maxWidth: "490px",
    width: "100%",
  },
});

export const Container = styled("div", {
  "#favorites": {
    marginTop: 72,

    ".works-total": {
      color: "$gray10",
      fontFamily: "var(--inter)",
      fontWeight: 500,
      fontSize: "1.125rem",
    },
  },
});
