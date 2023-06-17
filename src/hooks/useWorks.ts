import { Params } from "@/@types/params";
import { Work } from "@/@types/work";
import { api } from "@/services/api";
import { loadWorks } from "@/services/load-works";
import { useEffect, useState } from "react";

interface UseWorksProps {
  params: Params;
}

export function useWorks({ params }: UseWorksProps) {
  const [works, setWorks] = useState<Work[]>();

  useEffect(() => {
    async function loadRelatedWorksFromAuthor() {
      try {
        const response = await api.get<{ objectIDs: number[] }>(`/search`, {
          params,
        });

        const { objectIDs } = response.data;

        if (!objectIDs) return;

        const onlyFirstThreeIDs = objectIDs.slice(0, 3);
        const works = await loadWorks(onlyFirstThreeIDs);
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
