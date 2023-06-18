import { Work } from "@/@types/work";
import { WorkBox } from "@/components/layout";
import { Box, Container } from "@/components/pages/Favorites";
import { MainInfoContainer } from "@/components/styled";
import { key } from "@/constants/localStorage";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { loadWorks } from "@/services/load-works";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Favorites() {
  const [works, setWorks] = useState<Work[]>();
  const { storage: workIds } = useLocalStorage<number[]>(key);

  useEffect(() => {
    if (workIds) {
      loadWorks(workIds).then((data) => setWorks(data));
    }
  }, [workIds]);

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
            <strong className="works-total">
              Número total de obras: {works?.length ?? 0}
            </strong>

            <div className="works">
              {!!works &&
                works.map((work) => <WorkBox key={work.id} work={work} />)}
            </div>
          </Box>
        </section>
      </Container>
    </>
  );
}
