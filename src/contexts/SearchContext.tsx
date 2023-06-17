import { Params } from "@/@types/params";
import { Work } from "@/@types/work";
import { useWorks } from "@/hooks/useWorks";
import { api } from "@/services/api";
import { ReactNode, createContext, useCallback, useState } from "react";

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextProps {
  handleSearch(query: string, option: string): Promise<void>;
  works?: Work[];
}

export const SearchContext = createContext({} as SearchContextProps);

export function SearchProvider({ children }: SearchProviderProps) {
  const [works, setWorks] = useState<Work[]>();

  const handleSearch = useCallback(async (query: string, option: string) => {
    try {
      const response = await api.get<{
        objectIDs: number[];
      }>("/search", {
        params: {
          artistOrCulture: option === "artistOrCulture" ? true : undefined,
          geoLocation: option === "geoLocation" ? query : undefined,
          title: option === "title" ? true : undefined,
          q: query,
        },
      });

      const { objectIDs } = response.data;

      if (!objectIDs) return;

      const onlyFirstThreeIDs = objectIDs.slice(0, 9);
      const makeRequests = onlyFirstThreeIDs.map((id) =>
        api.get(`/objects/${id}`)
      );

      Promise.allSettled(makeRequests).then((objects) => {
        console.log(objects);
        const works = objects
          .filter((object) => object.status === "fulfilled")
          .map<Work>(({ value }) => ({
            id: value.data.objectID,
            image: value.data.primaryImageSmall,
            name: value.data.title,
            author: value.data.artistDisplayName,
            additionalImages: value.data.additionalImages,
            constituents: value.data.constituents,
            imageSmall: value.data.primaryImageSmall,
            isPublicDomain: value.data.isPublicDomain,
          }));

        setWorks(works);
      });
    } catch {}
  }, []);

  return (
    <SearchContext.Provider
      value={{
        handleSearch,
        works,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
