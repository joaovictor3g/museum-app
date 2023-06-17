import { useState } from "react";
import { RadioGroup } from "../RadioGroup";
import { Box, SearchInputContainer } from "./styles";
import { Search, ChevronDown } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";

export function SearchInput() {
  const [expandRadio, setExpandRadio] = useState(false);
  const { handleSearch } = useSearch();

  const [q, setQ] = useState("");
  const [searchBy, setSearchBy] = useState("");

  console.log({ searchBy });

  return (
    <Box
      className={expandRadio ? "expanded" : ""}
      onSubmit={async (e) => {
        e.preventDefault();
        handleSearch(q, searchBy);
      }}
    >
      <SearchInputContainer>
        <Search />
        <input
          type="text"
          placeholder="Busque por obras, artistas ou locais"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setExpandRadio((current) => !current)}
        >
          Filtro
          <ChevronDown className="icon" />
        </button>
      </SearchInputContainer>
      {expandRadio ? (
        <RadioGroup value={searchBy} onValueChange={setSearchBy} />
      ) : null}
    </Box>
  );
}
