import { styled } from "@/styles";

export const ImageSelectorContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "235px 1fr",
  gap: "1rem",

  img: {
    width: "100%",
    borderRadius: 8,
  },

  ".images-to-select": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  ".main-image": {
    objectFit: "contain",
  },
});
