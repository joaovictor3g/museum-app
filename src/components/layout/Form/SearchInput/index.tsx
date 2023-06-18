import { useEffect, useState } from "react";
import { RadioGroup } from "../RadioGroup";
import { Box, SearchInputContainer } from "./styles";
import { Search, ChevronDown, X } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import { Loading } from "../../Loading";

export function SearchInput() {
  const [expandRadio, setExpandRadio] = useState(false);
  const { handleSearch, page, loading } = useSearch();

  const [q, setQ] = useState("");
  const [searchBy, setSearchBy] = useState("");

  function handleClear() {
    setQ("");
  }

  useEffect(() => {
    handleSearch(q, searchBy);
  }, [searchBy, page]); // eslint-disable-line

  return (
    <Box
      className={expandRadio ? "expanded" : ""}
      onSubmit={async (e) => {
        e.preventDefault();
        await handleSearch(q, searchBy);
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
        {q.length > 0 && (
          <button type="button" className="clear" onClick={handleClear}>
            <X size={18} />
          </button>
        )}
        <button
          type="button"
          onClick={() => setExpandRadio((current) => !current)}
          className="filter"
        >
          {loading ? (
            <Loading size="20px" />
          ) : (
            <>
              Filtro
              <ChevronDown className="icon" />
            </>
          )}
        </button>
      </SearchInputContainer>
      <div className={`radio-container ${expandRadio ? "radio-expanded" : ""}`}>
        <RadioGroup value={searchBy} onValueChange={setSearchBy} />
      </div>

      <button type="submit" className="submit-mobile" disabled={loading}>
        {loading ? <Loading size="20px" /> : <>Buscar</>}
      </button>
    </Box>
  );
}
