import { ImageSelector } from "@/components/layout/ImageSelector";
import { Box } from "./styles";
import { Work } from "@/@types/work";

interface SectionInfosProps {
  work: Work;
}

export function SectionInfos({ work }: SectionInfosProps) {
  return (
    <Box>
      <ImageSelector images={work?.additionalImages} mainImage={work.image} />
      <div className="work-infos">
        <small className="category">Obra de arte</small>
        <h1 className="title">{work.name}</h1>
        <time className="createdAt">Criada em 12 de junho de 1995</time>

        <div className="artist">
          <span className="text">Artista</span>
          <span className="artist-name">{work.author}</span>
        </div>

        <div className="badge-domain">
          <span>Domínio público</span>
        </div>
      </div>
    </Box>
  );
}
