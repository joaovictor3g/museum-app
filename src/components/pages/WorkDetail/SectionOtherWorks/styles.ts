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

  ".works": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
  },
});
