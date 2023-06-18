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

export const Blur2 = styled("div", {
  backgroundColor: "$primary90",
  opacity: 0.32,
  filter: "blur(100px)",

  maxWidth: 300,
  maxHeight: 300,
  width: "100%",
  height: "100%",

  position: "absolute",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",

  "@md": {
    zIndex: -1,
  },
});
