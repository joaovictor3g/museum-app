import { Box, Container } from "@/components/pages/Favorites";
import { MainInfoContainer } from "@/components/styled";
import Head from "next/head";

export default function Favorites() {
  return (
    <>
      <Head>
        <title>Favoritos</title>
      </Head>

      <Container>
        <MainInfoContainer>
          <Box>
            <h1 className="page-title">Meus favoritos</h1>
            <span className="page-description">
              Esse espaço é dedicado para você ver aquelas obras que mais gostou
              e favoritou quando as viu.
            </span>
          </Box>
        </MainInfoContainer>
        <section id="favorites">
          <Box>
            <strong className="works-total">Número total de obras: 4</strong>
          </Box>
        </section>
      </Container>
    </>
  );
}
