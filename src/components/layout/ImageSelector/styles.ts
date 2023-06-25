import { styled, css } from "@/styles";

const scrollBarHidden = css({
  "&::-webkit-scrollbar": {
    width: 0,
  },
  // "&::-webkit-scrollbar-track": {
  //   width: "6px",
  // },
  // "&::-webkit-scrollbar-thumb": {
  //   background: ,
  //   borderRadius: "24px",
  // },
});

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
    overflowY: "auto",

    scrollbarWidth: 0,

    "&::-webkit-scrollbar": {
      display: "none",
    },

    button: {
      border: "1px solid $gray90",
      borderRadius: "$md",

      backgroundColor: "transparent",
      width: 235,
      height: "max-content",
      maxHeight: 132,

      transition: "opacity 0.5s",

      "&[data-active=true]": {
        border: "2px solid $primary60",
      },

      "&:hover": {
        opacity: 0.6,
      },
    },

    img: {
      objectFit: "cover",
      zIndex: 2,
    },
  },

  ".main-image": {
    position: "relative",
    border: "1px solid $gray90",
    overflow: "hidden",
    borderRadius: "$md",

    ".loading-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },

    ".zoom-image": {
      opacity: 0,
      position: "absolute",
      top: -16,
      right: -16,

      transition: "all 0.5s",

      backgroundColor: "$grayMain",
      padding: 4,
      borderRadius: 4,
      lineHeight: 0,

      color: "$primary50",
      border: "1px solid $gray70",
    },

    img: {
      // objectFit: "fill",
      height: "100%",
      maxHeight: 500,
      objectFit: "cover",
    },

    "&:hover": {
      ".zoom-image": {
        opacity: 1,
        top: 16,
        right: 16,
      },
    },
  },

  "@md": {
    gridTemplateColumns: "1fr",

    ".images-to-select": {
      display: "none",
    },

    ".main-image": {
      maxWidth: 700,
      width: "100%",

      img: {
        objectFit: "contain",
      },
    },
  },
});
