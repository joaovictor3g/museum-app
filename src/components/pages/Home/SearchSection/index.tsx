import { SearchInput } from "@/components/layout/Form";
import { SearchSectionContainer } from "./styles";
import { Wrapper } from "@/components/styled";

export function SearchSection() {
  return (
    <SearchSectionContainer id="search">
      <Wrapper>
        <SearchInput />
      </Wrapper>
    </SearchSectionContainer>
  );
}
