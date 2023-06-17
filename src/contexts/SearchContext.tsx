import { Params } from "@/@types/params";
import { Work } from "@/@types/work";
import { useWorks } from "@/hooks/useWorks";
import { api } from "@/services/api";
import { loadWorks } from "@/services/load-works";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextProps {
  handleSearch(query: string, option: string): Promise<void>;
  handleChangePage(page: number): void;
  works?: Work[];
  total: number;
  page: number;
}

export const SearchContext = createContext({} as SearchContextProps);

export function SearchProvider({ children }: SearchProviderProps) {
  const [works, setWorks] = useState<Work[]>();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const handleSearch = useCallback(
    async (query: string, option: string) => {
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

        setTotal(objectIDs.length);
        const onlyFirstThreeIDs = objectIDs.slice((page - 1) * 9, 9 * page);
        const works = await loadWorks(onlyFirstThreeIDs);
        setWorks(works);
      } catch {}
    },
    [page]
  );

  function handleChangePage(page: number) {
    setPage(page);
  }

  return (
    <SearchContext.Provider
      value={{
        handleSearch,
        handleChangePage,
        works,
        total,
        page,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
