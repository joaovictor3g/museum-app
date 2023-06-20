import { vitest } from "vitest";

const nextRouterObserverMock = () => ({
  asPath: "/",
});

const useRouter = vitest.fn().mockImplementation(nextRouterObserverMock);
