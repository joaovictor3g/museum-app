import { Wrapper } from "@/components/styled";
import { styled } from "@/styles";

export const SectionOtherWorksContainer = styled("section", {
  marginTop: 216,
  display: "flex",
  flexDirection: "column",
  gap: 24,
  padding: "1rem",

  h1: {
    fontFamily: "var(--inter)",
    fontWeight: 500,
    fontSize: "$xl",
    color: "$gray20",
    fontStyle: "normal",
  },

  "@md": {
    marginTop: 50,
  },
});
