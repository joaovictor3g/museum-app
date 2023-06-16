import { styled } from "@/styles";

export const MansoryContainer = styled("div", {
  columnCount: 5,
  columnGap: "10px",

  figure: {
    margin: 0,
    display: "flex",
    marginBottom: "10px",
    breakInside: "avoid",

    img: {
      width: "100%",
      borderRadius: 4,
    },
  },
});
