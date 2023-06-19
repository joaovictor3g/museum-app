import { Box } from "./styles";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  delayMs?: number;
  children: ReactNode;
}

export function ScrollReveal({ delayMs, children }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const refCurrent = ref?.current;

    async function animate() {
      if (refCurrent) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(refCurrent, {
          reset: false,
          delay: delayMs ?? 500,
          scale: 1,
          easing: "ease-in",
        });
      }
    }

    animate();
  }, [delayMs]);

  return <Box ref={ref}>{children}</Box>;
}
