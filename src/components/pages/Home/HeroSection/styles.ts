import { Wrapper } from "@/components/styled";
import { styled, keyframes } from "@/styles";

const showUp = keyframes({
  from: {
    transform: "translateY(100px)",
    opacity: 0,
  },

  to: {
    transform: "translateY(0)",
    opacity: 1,
  },
});

export const HeroSectionContainer = styled("section", {
  backgroundImage: `url(/hero-background.png)`,
  backgroundPosition: "center 136px",
  backgroundSize: "auto",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "calc(100vh - 80px)",
  backgroundColor: "$gray100",

  "@md": {
    height: "max-content",
    background: "initial",
  },
});

export const Box = styled(Wrapper, {
  paddingTop: 347,
  height: "inherit",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",

  alignItems: "center",
  gap: "1.5rem",
  maxWidth: 1000,
  width: "100%",
  paddingBottom: "3rem",

  p: {
    fontSize: "$4xl",
    fontWeight: 500,
    color: "$gray10",
    fontFamily: "var(--pp-hatton)",
    animation: `${showUp} 500ms linear`,

    ".highlight": {
      color: "$primaryMain",
    },
  },

  ".discover": {
    maxWidth: 900,
    width: "100%",
    margin: "0 auto",
    color: "$gray20",
    fontFamily: "var(--inter)",
    fontSize: "$xl",
    animation: `${showUp} 500ms linear`,
  },

  ".scrolldown": {
    marginTop: "2rem",
    backgroundColor: "transparent",
    color: "$primaryMain",
    border: "1px solid $primaryMain",
    borderRadius: "$full",

    width: 64,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 300ms",

    "&:hover": {
      transform: "scale(1.2)",
      color: "$primary20",
    },
  },

  "@md": {
    padding: "1rem",

    ".scrolldown": {
      display: "none",
    },

    p: {
      fontSize: "$2xl",
    },

    ".discover": {
      fontSize: "$lg",
    },
  },
});
