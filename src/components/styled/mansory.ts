import { styled } from "@/styles";

export const MansoryContainer = styled("div", {
  columnCount: 4,
  columnGap: "10px",

  figure: {
    margin: 0,
    display: "flex",
    marginBottom: "10px",
    breakInside: "avoid",

    img: {
      width: "100%",
      opacity: 0.8,
      borderRadius: 4,
    },
  },

  "@lg": {
    columnCount: 2,
    padding: "2rem",
  },

  "@md": {
    columnCount: 1,
  },
});
