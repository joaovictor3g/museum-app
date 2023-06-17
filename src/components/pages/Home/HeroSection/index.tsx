import { Box, HeroSectionContainer } from "./styles";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <HeroSectionContainer id="hero">
      <Box>
        <p>
          Explore a arte metropolitana além{" "}
          <span className="highlight">das fronteiras!</span>
        </p>
        <span className="discover">
          Descubra um novo mundo de beleza e cultura através do grandioso e
          renomado Museu Metropolitano de Arte.
        </span>

        <a href="#search" className="scrolldown">
          <ArrowDown />
        </a>
      </Box>
    </HeroSectionContainer>
  );
}
