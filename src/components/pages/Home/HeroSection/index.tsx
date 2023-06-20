import { Box, HeroSectionContainer } from "./styles";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <HeroSectionContainer id="hero">
      <Box>
        <p data-testid="explore">
          Explore a arte metropolitana além{" "}
          <span className="highlight">das fronteiras!</span>
        </p>
        <span data-testid="discover" className="discover">
          Descubra um novo mundo de beleza e cultura através do grandioso e
          renomado Museu Metropolitano de Arte.
        </span>

        <a
          href="#search"
          className="scrolldown"
          data-testid="scrolldown-anchor"
        >
          <ArrowDown />
        </a>
      </Box>
    </HeroSectionContainer>
  );
}
