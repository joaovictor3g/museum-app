import { SearchInputContainer } from "./styles";

export function SearchInput() {
  return (
    <SearchInputContainer>
      <input
        type="text"
        placeholder="Busque por obras ou artistas metropolitanos"
      />
    </SearchInputContainer>
  );
}
