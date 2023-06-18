import * as RadixToast from "@radix-ui/react-toast";
import { X } from "lucide-react";

import {
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "./styles";
import { CSSProperties } from "react";

type Status = "success" | "error";

interface ToastProps
  extends Pick<RadixToast.ToastProps, "open" | "onOpenChange" | "title"> {
  description: JSX.Element;
  status: Status;
}

export function Toast(props: ToastProps) {
  let rootErrorStyles: CSSProperties | undefined = {};
  let descriptionErrorStyles: CSSProperties | undefined = {};

  if (props.status === "error") {
    rootErrorStyles = {
      backgroundColor: "red",
      color: "grey",
    };

    descriptionErrorStyles = {
      color: "$gray10",
    };
  }

  return (
    <ToastProvider swipeDirection="right" duration={1000}>
      <ToastRoot
        open={props.open}
        onOpenChange={props.onOpenChange}
        style={rootErrorStyles}
      >
        <ToastTitle>{props.title}</ToastTitle>
        <ToastDescription style={descriptionErrorStyles}>
          {props.description}
        </ToastDescription>

        <ToastClose>
          <X />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  );
}
