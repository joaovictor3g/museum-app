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
    color: "$gray30",

    borderBottom: "1px solid $gray90",
  },
});
