import { Params } from "@/@types/params";
import { Work } from "@/@types/work";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

interface UseWorksProps {
  params: Params;
}

export function useWorks({ params }: UseWorksProps) {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    async function loadRelatedWorksFromAuthor() {
      try {
        const response = await api.get<{ objectIDs: number[] }>(`/search`, {
          params,
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
  }, [params?.artistsOrCulture, params?.geoLocation, params?.q, params?.title]); // eslint-disable-line

  return {
    works,
  };
}
