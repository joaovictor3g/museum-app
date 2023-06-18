import Image, { StaticImageData } from "next/image";
import { EmptyStateContainer } from "./styles";

interface EmptyStateProps {
  img: StaticImageData;
  message: string;
}

export function EmptyState({ img, message }: EmptyStateProps) {
  return (
    <EmptyStateContainer>
      <Image src={img} alt="Imagem indicando conteúdo vazio" />
      <p className="message">{message}</p>
    </EmptyStateContainer>
  );
}
