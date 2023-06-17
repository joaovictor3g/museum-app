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

  ".keen-slider": {
    "&__slide": {
      maxWidth: "initial !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "$gray90",
      color: "$gray10",
      padding: "8px 16px",
      borderRadius: 4,
      // whiteSpace: "nowrap",
    },
  },
});
