import { keyframes, styled } from "@/styles";

import * as Toast from "@radix-ui/react-toast";

const hide = keyframes({
  "0%": {
    opacity: 1,
  },

  "100%": {
    opacity: 0,
  },
});

const slideIn = keyframes({
  from: {
    transform: "translateX(calc(100% + 25px))",
  },

  to: {
    transform: "translateX(0)",
  },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: "translateX(calc(100% + 25px))" },
});

export const ToastProvider = styled(Toast.Provider, {});

export const ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  top: "0",
  right: "0",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  gap: "10px",
  width: "390px",
  maxWidth: "100vw",
  zIndex: "2147483647",
  outline: "none",
});

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: "$primary50",
  color: "$gray10",
  borderRadius: "4px",
  padding: "1rem",
  position: "relative",
  listStyle: "none",

  "&[data-state=open]": {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: "translateX(var(--radix-toast-swipe-move-x))",
  },

  '&[data-swipe="cancel"]': {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out",
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

export const ToastTitle = styled(Toast.Title, {
  fontWeight: "bold",
  fontSize: "$lg",
  color: "$gray100",
});

export const ToastDescription = styled(Toast.Description, {
  fontSize: "1rem",
  color: "$gray100",
  fontFamily: "var(--inter)",
});

export const ToastAction = styled(Toast.Action, {});

export const ToastClose = styled(Toast.Close, {
  position: "absolute",
  top: "1rem",
  right: "1rem",

  backgroundColor: "transparent",
  border: "0",

  svg: {
    width: "24px",
    height: "24px",
  },
});
