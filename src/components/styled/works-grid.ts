import { styled } from "@/styles";

export const WorksGridContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "1rem",

  "@lg": {
    gridTemplateColumns: "1fr 1fr",
  },

  "@sm": {
    gridTemplateColumns: "1fr",
  },
});
