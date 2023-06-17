import { ImageSelector } from "@/components/layout/ImageSelector";
import { Box } from "./styles";
import { Work } from "@/@types/work";
import { Heart } from "lucide-react";
import { Tooltip } from "@/components/layout";

interface SectionInfosProps {
  work: Work;
}

export function SectionInfos({ work }: SectionInfosProps) {
  return (
    <Box>
      <ImageSelector images={work?.additionalImages} mainImage={work.image} />
      <div className="work-infos">
        <header>
          <small className="category">Obra de arte</small>
          <Tooltip
            content={
              <span style={{ fontFamily: "var(--inter)" }}>Favoritar</span>
            }
          >
            <button className="favorite">
              <Heart />
            </button>
          </Tooltip>
        </header>
        <h1 className="title">{work.name}</h1>
        <time className="createdAt">Criada em 12 de junho de 1995</time>

        <div className="artist">
          <span className="text">Artista</span>
          <span className="artist-name">
            {!!work.author ? work.author : "Não consta"}
          </span>
        </div>

        <div className="badge-domain">
          {work.isPublicDomain ? (
            <span className="public">Domínio público</span>
          ) : (
            <span className="private">Domínio privado</span>
          )}
        </div>
      </div>
    </Box>
  );
}
