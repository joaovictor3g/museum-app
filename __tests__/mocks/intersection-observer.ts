import { vitest } from "vitest";

const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
});
window.IntersectionObserver = vitest
  .fn()
  .mockImplementation(intersectionObserverMock);
