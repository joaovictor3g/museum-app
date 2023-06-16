import { Wrapper } from "@/components/styled";
import { styled } from "@/styles";

export const HeroSectionContainer = styled("section", {
  marginTop: 136,
  backgroundImage: `url(/hero-background.png)`,
  backgroundPosition: "top",
  backgroundSize: "auto",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "calc(100vh - 80px - 136px)",

  "@md": {
    marginTop: 68,
  },
});

export const Box = styled(Wrapper, {
  height: "inherit",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.5rem",
  maxWidth: 1000,
  width: "100%",

  p: {
    fontSize: "$4xl",
    fontWeight: 500,
    color: "$gray10",
    fontFamily: "var(--pp-hatton)",

    ".highlight": {
      color: "$primaryMain",
    },
  },

  ".discover": {
    color: "$gray20",
    fontFamily: "var(--inter)",
    fontSize: "$xl",
  },

  ".scrolldown": {
    marginTop: "2rem",
    backgroundColor: "transparent",
    color: "$primaryMain",
    border: "1px solid currentColor",
    borderRadius: "$full",

    width: 64,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  "@md": {
    padding: "1rem",
    p: {
      fontSize: "$2xl",
    },

    ".discover": {
      fontSize: "$lg",
    },
  },
});
