import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@/styles";

export const DialogRoot = styled(Dialog.Root, {});

export const DialogTrigger = styled(Dialog.Trigger, {});

export const DialogClose = styled(Dialog.Close, {
  position: "absolute",
  top: 16,
  right: 16,

  border: "none",
  color: "$gray70",
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: "$gray10",
  height: "100vh",
  // maxWidth: 900,
  width: "100vw",

  borderRadius: "$md",

  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999999999,

  img: {
    width: "max-content",
    height: "100%",
  },
});

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0,0,0, 0.74)",
  position: "fixed",
  inset: 0,
  zIndex: 9999999,
});

export const DialogPortal = styled(Dialog.Portal, {});

export const DialogTitle = styled(Dialog.Title, {});
