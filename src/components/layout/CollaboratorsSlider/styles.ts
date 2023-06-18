import { styled } from "@/styles";

export const CollaboratorsSliderContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 30,

  ".top": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    button: {
      border: "none",
      backgroundColor: "transparent",
      color: "$gray40",

      "&:disabled": {
        cursor: "not-allowed",
        color: "$gray70",
      },
    },
  },

  ".slide": {
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$gray90",
    color: "$gray10",
    padding: "8px 16px",
    borderRadius: 4,
  },

  ".keen-slider": {
    width: "100%",
    "&__slide": {},
  },

  // "@xl": {
  //   ".keen-slider": {
  //     minWidth: 1000,
  //     maxWidth: 1216,
  //   },
  // },

  // "@lg": {
  //   ".keen-slider": {
  //     minWidth: 768,
  //     maxWidth: 968,
  //   },
  // },

  // "@md": {
  //   ".keen-slider": {
  //     margin: "0 auto",
  //     minWidth: 500,
  //     maxWidth: 730,
  //   },
  // },

  // "@sm": {
  //   ".keen-slider": {
  //     minWidth: 300,
  //     maxWidth: 468,
  //   },
  // },
});
