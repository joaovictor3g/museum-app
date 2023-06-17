import { styled } from "@/styles";

export const ImageSelectorContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "235px 1fr",
  gap: "1rem",

  img: {
    width: "100%",
    height: "100%",
    borderRadius: "$md",
  },

  ".images-to-select": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    button: {
      border: "1px solid $gray90",
      borderRadius: "$md",

      backgroundColor: "transparent",
      width: 235,
      height: "max-content",
      maxHeight: 132,
    },

    img: {
      objectFit: "cover",
    },
  },

  ".main-image": {
    position: "relative",
    border: "1px solid $gray90",
    overflow: "hidden",
    borderRadius: "$md",

    img: {
      objectFit: "fill",
    },
  },
});