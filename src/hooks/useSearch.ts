import { SearchContext } from "@/contexts/SearchContext";
import { useContext } from "react";

export function useSearch() {
  return useContext(SearchContext);
}
