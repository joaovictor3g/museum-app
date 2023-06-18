import { styled } from "@/styles";

export const EmptyStateContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2rem",

  ".message": {
    fontFamily: "var(--inter)",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "1.125rem",
    color: "$gray40",
    textAlign: "center",
  },

  "@md": {
    padding: "0 1rem",

    img: {
      width: 200,
      height: 200,
      objectFit: "contain",
    },

    ".message": {
      fontSize: "$md",
    },
  },
});
