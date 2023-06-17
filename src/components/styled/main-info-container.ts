import { styled } from "@/styles";

export const MainInfoContainer = styled("div", {
  backgroundColor: "$gray100",
  padding: "60px 0",

  a: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textTransform: "uppercase",
    textDecoration: "none",

    color: "$gray40",
    fontSize: "$md",
    fontWeight: 500,
    fontFamily: "var(--inter)",
  },
});
