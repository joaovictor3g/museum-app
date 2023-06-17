import { styled } from "@/styles";

export const SearchInputContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "$gray100",
  border: "1px solid $gray90",
  borderRadius: "$lg",

  maxWidth: 700,
  width: "100%",
  height: 64,
  margin: "0 auto",
  overflow: "hidden",
  paddingInlineStart: "1rem",
  color: "$gray40",

  input: {
    flex: 1,
    backgroundColor: "inherit",
    border: "none",
    color: "inherit",
    fontWeight: 400,
    fontSize: "1.125rem",
    outline: "none",
    marginLeft: 19,
  },

  button: {
    justifySelf: "end",

    backgroundColor: "$gray90",
    border: "none",
    height: "inherit",

    display: "flex",
    alignItems: "center",
    gap: "1rem",

    color: "$gray20",
    fontSize: "1.125rem",
    fontWeight: 400,

    padding: "1.5rem",
  },
});
