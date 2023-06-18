import { styled } from "@/styles";

export const FooterContainer = styled("footer", {
  height: 80,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "$gray100",
  backdropFilter: "blur(24px)",
  padding: "0 1rem",

  span: {
    fontFamily: "var(--inter)",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "$md",
    color: "$primary40",
    isolation: "isolate",
  },
});
