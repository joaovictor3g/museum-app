import { Params } from "@/@types/params";
import { Work } from "@/@types/work";
import { api } from "@/services/api";
import { loadWorks } from "@/services/load-works";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface UseWorksProps {
  params: Params;
}

export function useWorks({ params }: UseWorksProps) {
  const [works, setWorks] = useState<Work[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | AxiosError | null>(null);

  useEffect(() => {
    setLoading(true);

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
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    loadRelatedWorksFromAuthor();
  }, [params?.artistsOrCulture, params?.geoLocation, params?.q, params?.title]); // eslint-disable-line

  return {
    works,
    loading,
    error,
  };
}
