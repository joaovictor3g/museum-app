import { SearchInput } from "@/components/layout/Form";
import { SearchSectionContainer } from "./styles";
import { Wrapper } from "@/components/styled";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function SearchSection() {
  const [visible, ref] = useIntersectionObserver<HTMLDivElement>(true);

  return (
    <SearchSectionContainer id="search">
      <Wrapper ref={ref}>
        <p
          className={`hint ${visible ? "on-view" : "hidden"}`}
          data-testid="hint"
        >
          Pesquise entre as mais de <span className="highlight">400.000</span>{" "}
          obras existentes.
        </p>

        <SearchInput />
      </Wrapper>
    </SearchSectionContainer>
  );
}
