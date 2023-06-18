import { styled, keyframes } from "@/styles";

const rotation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const LoadingContainer = styled("div", {
  width: "var(--size)",
  height: "var(--size)",
  borderRadius: "50%",
  display: "inline-block",
  borderTop: "4px solid $gray10",
  borderRight: "4px solid transparent",
  animation: `${rotation} 1s linear infinite`,

  "&::after": {
    content: "",
    position: "absolute",
    left: "0",
    top: "0",
    width: "var(--size)",
    height: "var(--size)",
    borderRadius: "50%",
    borderBottom: "4px solid $primaryMain",
    borderLeft: "4px solid transparent",
  },
});
