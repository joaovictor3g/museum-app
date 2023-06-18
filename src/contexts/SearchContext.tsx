import { Work } from "@/@types/work";
import { api } from "@/services/api";
import { loadWorks } from "@/services/load-works";
import { ReactNode, createContext, useState } from "react";

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextProps {
  handleSearch(query: string, option: string): Promise<void>;
  handleChangePage(page: number): void;
  works?: Work[];
  total: number;
  page: number;
  loading: boolean;
  forceUpdateWorks(works?: Work[]): void;
}

export const SearchContext = createContext({} as SearchContextProps);

export function SearchProvider({ children }: SearchProviderProps) {
  const [works, setWorks] = useState<Work[]>();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string, option: string) => {
    if (!query && !option) {
      setWorks(undefined);
      return;
    }

    setLoading(true);
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

      if (!objectIDs) {
        setTotal(-1);
        setWorks(undefined);
        return;
      }

      const onlyFirstThreeIDs = objectIDs.slice((page - 1) * 9, 9 * page);
      const works = await loadWorks(onlyFirstThreeIDs);
      setWorks(works);
      setTotal(objectIDs.length);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  function handleChangePage(page: number) {
    setPage(page);
  }

  function forceUpdateWorks(works?: Work[]) {
    setWorks(works);
    setTotal(!!works ? works.length : 0);
  }

  return (
    <SearchContext.Provider
      value={{
        handleSearch,
        handleChangePage,
        works,
        total,
        page,
        loading,
        forceUpdateWorks,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
