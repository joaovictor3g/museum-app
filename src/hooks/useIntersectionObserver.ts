import { MutableRefObject, useEffect, useRef, useState } from "react";

export function useIntersectionObserver<T extends HTMLElement>(
  once = false
): [visible: boolean, instanceRef: MutableRefObject<T | null>] {
  const instanceRef = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const instanceCurrent = instanceRef.current;

    if (!instanceCurrent) return;

    const observer = new IntersectionObserver(
      ([{ isIntersecting }], obs) => {
        setVisible(isIntersecting);
        if (isIntersecting) {
          if (once) obs.unobserve(instanceCurrent);
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(instanceCurrent);
    return () => observer.unobserve(instanceCurrent);
  }, [once]);

  return [visible, instanceRef];
}
