import { ReactNode } from "react";
import {
  DialogRoot,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "./styles";
import { X } from "lucide-react";
import { DialogProps } from "@radix-ui/react-dialog";

interface ModalProps extends DialogProps {
  title: string;
  children: ReactNode;
  closeIcon?: JSX.Element;
}

export function Modal({ children, closeIcon, ...rest }: ModalProps) {
  return (
    <DialogRoot {...rest}>
      <DialogPortal>
        <DialogOverlay />

        <DialogContent>
          <DialogTitle>{rest.title}</DialogTitle>
          {children}
          <DialogClose aria-label="Close modal">
            {closeIcon ?? <X />}
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  );
}
