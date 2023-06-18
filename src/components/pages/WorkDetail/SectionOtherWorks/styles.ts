import { Wrapper } from "@/components/styled";
import { styled } from "@/styles";

export const SectionOtherWorksContainer = styled("section", {
  marginTop: 216,
  display: "flex",
  flexDirection: "column",
  gap: 24,

  h1: {
    fontFamily: "var(--inter)",
    fontWeight: 500,
    fontSize: "$xl",
    color: "$gray20",
    fontStyle: "normal",
  },

  "@xl": {
    padding: "1rem",
    marginTop: 50,
  },
});

export const LoadingContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  minHeight: 300,
});
