import { styled } from "@/styles";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const RadioGroupRoot = styled(RadioGroup.Root, {
  display: "flex",
  justifyContent: "space-between",

  height: 64,
  width: "100%",
  backgroundColor: "$gray100",
  borderTop: "inherit",
});

export const RadioGroupItem = styled(RadioGroup.Item, {
  flex: 1,
  backgroundColor: "transparent",
  border: "none",
  color: "$gray30",
  fontSize: "1.125rem",
  fontWeight: 400,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  zIndex: 2,

  "&[data-state=checked]": {
    backgroundColor: "$primary50",
    color: "$grayMain",
  },

  "&:not(:last-of-type)": {
    position: "relative",

    "&:after": {
      content: "",
      height: "50px",
      backgroundColor: "$gray90",
      width: 1,
      position: "absolute",
      right: -1,
    },
  },

  "@md": {
    fontSize: "$md",

    svg: {
      display: "none",
    },
  },
});

export const RadioGroupIndicator = styled(RadioGroup.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: 11,
    height: 11,
    borderRadius: "50%",
    backgroundColor: "$primaryMain",
  },
});
