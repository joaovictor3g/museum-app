import { useState } from "react";
import { RadioGroup } from "../RadioGroup";
import { Box, SearchInputContainer } from "./styles";
import { Search, ChevronDown } from "lucide-react";

export function SearchInput() {
  const [expandRadio, setExpandRadio] = useState(false);

  return (
    <Box
      className={expandRadio ? "expanded" : ""}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <SearchInputContainer>
        <Search />
        <input type="text" placeholder="Busque por obras, artistas ou locais" />
        <button onClick={() => setExpandRadio((current) => !current)}>
          Filtro
          <ChevronDown className="icon" />
        </button>
      </SearchInputContainer>
      {expandRadio ? <RadioGroup /> : null}
    </Box>
  );
}
