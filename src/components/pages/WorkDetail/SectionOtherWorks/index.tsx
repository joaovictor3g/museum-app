import { WorkBox } from "@/components/layout";
import { SectionOtherWorksContainer } from "./styles";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Work } from "@/@types/work";

interface SectionOtherWorksProps {
  author: string;
}

export function SectionOtherWorks({ author }: SectionOtherWorksProps) {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    async function loadRelatedWorksFromAuthor() {
      try {
        const response = await api.get<{ objectIDs: number[] }>(`/search`, {
          params: {
            artistsOrCulture: true,
            q: author,
          },
        });

        const { objectIDs } = response.data;

        if (!objectIDs) return;

        const onlyFirstThreeIDs = objectIDs.slice(0, 3);
        const makeRequests = onlyFirstThreeIDs.map((id) =>
          api.get(`/objects/${id}`)
        );
        const objects = await Promise.all(makeRequests);

        const works = objects.map<Work>(({ data }) => ({
          id: data.objectID,
          image: data.primaryImageSmall,
          name: data.title,
          author: data.artistDisplayName,
          additionalImages: data.additionalImages,
          constituents: data.constituents,
          imageSmall: data.primaryImageSmall,
          isPublicDomain: data.isPublicDomain,
        }));

        setWorks(works);
      } catch {
        console.log("Erro");
      }
    }

    loadRelatedWorksFromAuthor();
  }, [author]);

  if (works.length === 0) return null;

  return (
    <SectionOtherWorksContainer>
      <h1>Outras obras do artista</h1>

      <div className="works">
        {works.map((work) => (
          <WorkBox key={work.id} work={work} />
        ))}
      </div>
    </SectionOtherWorksContainer>
  );
}