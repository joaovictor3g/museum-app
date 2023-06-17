import { styled, keyframes } from "@/styles";

const shimmer = keyframes({
  from: {
    transform: "translateX(-100%)",
  },
  to: {
    transform: "translateX(200%)",
  },
});

export const LoadingContainer = styled("div", {});
