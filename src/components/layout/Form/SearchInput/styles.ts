import { styled } from "@/styles";

export const Box = styled("div", {
  maxWidth: 700,
  width: "100%",
  margin: "0 auto",
  border: "1px solid $gray90",
  borderRadius: "$lg",
  overflow: "hidden",

  "&.expanded": {
    ".icon": {
      transform: "rotate(180deg)",
      transition: "transform 0.5s",
    },
  },

  ".options": {
    height: 64,
    width: "100%",
    backgroundColor: "$gray100",
    borderTop: "inherit",
  },

  "&:hover": {
    border: "1px solid $gray70",
    color: "$gray30",
  },
});

export const SearchInputContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "$gray100",

  height: 64,
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
