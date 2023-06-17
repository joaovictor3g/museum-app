import { styled } from "@/styles";

export const ImageSelectorContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "235px 1fr",
  gap: "1rem",

  img: {
    width: "100%",
    borderRadius: 8,
    height: "100%",
  },

  ".images-to-select": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    img: {
      width: 235,
      height: 131,
    },
  },

  ".main-image": {
    objectFit: "cover",
  },
});
