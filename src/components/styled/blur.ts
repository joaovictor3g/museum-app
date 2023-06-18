import { styled } from "@/styles";

export const Blur = styled("div", {
  backgroundColor: "$primary100",
  opacity: 0.32,
  filter: "blur(150px)",

  maxWidth: 690,
  maxHeight: 690,
  width: "100%",
  height: "100%",

  position: "absolute",
  top: 0,
  left: 0,

  "@md": {
    zIndex: -1,
  },
});
