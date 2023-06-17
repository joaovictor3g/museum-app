import { SearchInputContainer } from "./styles";
import { Search, ChevronDown } from "lucide-react";

export function SearchInput() {
  return (
    <SearchInputContainer>
      <Search />
      <input
        type="text"
        placeholder="Busque por obras ou artistas metropolitanos"
      />
      <button>
        Filtro
        <ChevronDown />
      </button>
    </SearchInputContainer>
  );
}
