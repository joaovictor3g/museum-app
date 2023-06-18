import { styled } from "@/styles";

export const Separator = styled("div", {
  display: "flex",

  height: 1,
  width: "100%",
  backgroundColor: "$gray90",
  margin: "var(--margin) 0",

  "@md": {
    margin: "36px 0",
  },
});
