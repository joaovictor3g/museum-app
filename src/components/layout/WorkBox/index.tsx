import Image from "next/image";
import { Box } from "./styles";
import Link from "next/link";
import { Work } from "@/@types/work";

interface WorkBoxProps {
  work: Work;
}

export function WorkBox({ work }: WorkBoxProps) {
  const author = !!work.author ? work.author : "Autor não encontrado";

  return (
    <Box href={`/work/${work.id}`}>
      {!!work.imageSmall ? (
        <Image src={work.imageSmall} alt="" width={300} height={300} />
      ) : (
        <div className="image-unavailable">
          <span>Imagem não disponível</span>
        </div>
      )}
      <div className="infos">
        <strong className="title">{work.name}</strong>
        <span className="author">{author}</span>
      </div>
    </Box>
  );
}
