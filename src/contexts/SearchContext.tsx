import { Params } from "@/@types/params";
import { Work } from "@/@types/work";
import { useWorks } from "@/hooks/useWorks";
import { api } from "@/services/api";
import { loadWorks } from "@/services/load-works";
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
      const works = await loadWorks(onlyFirstThreeIDs);
      setWorks(works);
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
