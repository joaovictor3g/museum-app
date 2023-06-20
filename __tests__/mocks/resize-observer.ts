import { vitest } from "vitest";

const resizeObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
});

window.ResizeObserver = vitest.fn().mockImplementation(resizeObserverMock);
