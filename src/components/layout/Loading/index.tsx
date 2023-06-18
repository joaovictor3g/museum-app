import { LoadingContainer } from "./styles";

interface LoadingProps {
  size?: string;
}

export function Loading({ size = "48px" }: LoadingProps) {
  return <LoadingContainer css={{ "--size": size }} />;
}
