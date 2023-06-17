import { MansoryContainer } from "@/components/styled";
import { Box, WorksOfArtSectionContainer } from "./styles";

import Image from "next/image";

import img1 from "@/assets/mocks/1.png";
import img2 from "@/assets/mocks/2.png";
import img3 from "@/assets/mocks/3.png";
import img4 from "@/assets/mocks/4.png";
import img5 from "@/assets/mocks/5.png";
import img6 from "@/assets/mocks/6.png";

export function WorksOfArtSection() {
  return (
    <WorksOfArtSectionContainer id="worksOfArt">
      <Box>
        <h1>Veja algumas obras</h1>

        <MansoryContainer>
          <figure>
            <Image src={img1} alt="" />
          </figure>
          <figure>
            <Image src={img2} alt="" />
          </figure>
          <figure>
            <Image src={img3} alt="" />
          </figure>
          <figure>
            <Image src={img4} alt="" />
          </figure>
          <figure>
            <Image src={img5} alt="" />
          </figure>
          <figure>
            <Image src={img6} alt="" />
          </figure>
        </MansoryContainer>
      </Box>
    </WorksOfArtSectionContainer>
  );
}
