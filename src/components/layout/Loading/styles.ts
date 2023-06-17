import { styled, keyframes } from "@/styles";

const shimmer = keyframes({
  from: {
    transform: "translateX(-100%)",
  },
  to: {
    transform: "translateX(200%)",
  },
});

export const LoadingContainer = styled("div", {
  // color: "$gray90",
  // display: "inline-block",
  background:
    "linear-gradient(100deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.1) 50%,rgba(255,255,255,0) 80%)",
  backgroundRepeat: "no-repeat",
  animation: `${shimmer} 1s infinite linear`,
  width: "100%",
  height: "100%",
});
