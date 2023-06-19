import { styled } from "@/styles";

export const Box = styled("form", {
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

  ".radio-container": {
    display: "none",
    borderTop: "inherit",
    transition: "height 0.2s",

    "&.radio-expanded": {
      display: "initial",
      height: 64,
    },

    "@md": {
      display: "initial",
    },
  },

  "&:hover": {
    border: "1px solid $gray70",
    color: "$gray30",
  },

  ".submit-mobile": {
    display: "none",
  },

  "@md": {
    ".submit-mobile": {
      height: 64,
      width: "100%",
      border: "none",
      borderTop: "1px solid $gray90",
      backgroundColor: "$gray20",
      color: "$gray90",
      fontSize: "$normal",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",

      "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.8,
      },
    },
  },
});

export const SearchInputContainer = styled("label", {
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

  ".clear": {
    backgroundColor: "transparent",
    color: "$gray50",
    border: "none",
    marginRight: 30,

    "&:hover": {
      color: "$gray30",
    },
  },

  ".filter": {
    justifySelf: "end",
    minWidth: 132,

    backgroundColor: "$gray90",
    border: "none",
    height: "inherit",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",

    color: "$gray20",
    fontSize: "1.125rem",
    fontWeight: 400,

    padding: "1.5rem",
  },

  "@md": {
    gap: 8,

    svg: {
      width: 15,
      height: 15,
    },

    input: {
      marginLeft: 0,
      fontSize: "$normal",
    },

    ".filter": {
      display: "none",
      fontSize: "$md",
      minWidth: 50,
    },
  },
});
