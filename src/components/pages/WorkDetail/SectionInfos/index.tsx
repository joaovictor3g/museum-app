import { ImageSelector } from "@/components/layout/ImageSelector";
import { Box } from "./styles";
import { Work } from "@/@types/work";
import { Heart } from "lucide-react";
import { CollaboratorsSlider, Toast, Tooltip } from "@/components/layout";
import { key } from "@/constants/localStorage";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useState } from "react";

interface SectionInfosProps {
  work: Work;
}

export function SectionInfos({ work }: SectionInfosProps) {
  const [toastProps, setToastProps] = useState({
    open: false,
    error: false,
    description: "",
  });

  const { storage, set } = useLocalStorage<number[]>(key);
  const hasWorkinStorage = storage?.includes(work.id);

  function handleFavoriteWork(id: number) {
    const inStorageIDs = [...(storage ?? [])];
    if (hasWorkinStorage) {
      const removedIds = inStorageIDs.filter((storageID) => storageID !== id);
      set(key, removedIds);
      setToastProps((currentToastProps) => ({
        ...currentToastProps,
        description: "Você acaba de desfavoritar esta obra!",
        open: true,
      }));
    } else {
      set(key, [...inStorageIDs, id]);
      setToastProps((currentToastProps) => ({
        ...currentToastProps,
        description: "Você acaba de favoritar esta obra!",
        open: true,
      }));
    }
  }

  return (
    <Box>
      <ImageSelector images={work?.additionalImages} mainImage={work.image} />

      <div className="work-infos">
        <header>
          <small className="category">Obra de arte</small>
          <Tooltip
            content={
              <span style={{ fontFamily: "var(--inter)" }}>
                {hasWorkinStorage ? "Favoritado" : "Favoritar"}
              </span>
            }
          >
            <button
              className={`favorite ${hasWorkinStorage ? "favorited" : ""}`}
              onClick={() => handleFavoriteWork(work.id)}
            >
              <Heart />
            </button>
          </Tooltip>
        </header>
        <h1
          className="title"
          title={work.fullName}
          dangerouslySetInnerHTML={{ __html: work.name }}
        />
        <time className="createdAt">Criação: {work.objectDate}</time>

        <div className="artist">
          <span className="text">Artista</span>
          <span className="artist-name">
            {!!work.author ? work.author : "Não consta"}
          </span>
        </div>

        <div
          className={`badge-domain ${
            work.isPublicDomain ? "public" : "private"
          }`}
        >
          {work.isPublicDomain ? (
            <span className="public">Domínio público</span>
          ) : (
            <span className="private">Domínio privado</span>
          )}
        </div>

        <div className="separator" />

        <CollaboratorsSlider
          slides={work.constituents?.map((constituent) => constituent.name)}
        />
      </div>

      <Toast
        open={toastProps.open}
        onOpenChange={() =>
          setToastProps((current) => ({ ...current, open: false }))
        }
        description={<>{toastProps.description}</>}
        status={toastProps.error ? "error" : "success"}
      />
    </Box>
  );
}
