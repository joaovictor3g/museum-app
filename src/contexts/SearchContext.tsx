import { ReactNode, createContext } from "react";

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext({});

export function SearchProvider({ children }: SearchProviderProps) {
  return <SearchContext.Provider value={{}}></SearchContext.Provider>;
}
