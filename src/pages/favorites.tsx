import { Work } from "@/@types/work";
import { WorkBox } from "@/components/layout";
import { Loading } from "@/components/layout/Loading";
import { Box, Container } from "@/components/pages/Favorites";
import { MainInfoContainer, WorksGridContainer } from "@/components/styled";
import { key } from "@/constants/localStorage";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { loadWorks } from "@/services/load-works";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Favorites() {
  const [works, setWorks] = useState<Work[]>();
  const [loading, setLoading] = useState(false);

  const { storage: workIds } = useLocalStorage<number[]>(key);

  useEffect(() => {
    if (workIds) {
      setLoading(true);
      loadWorks(workIds)
        .then((data) => setWorks(data))
        .finally(() => setLoading(false));
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

            {loading && (
              <div className="loading-container">
                <Loading />
              </div>
            )}

            <WorksGridContainer>
              {!!works &&
                !loading &&
                works.map((work) => <WorkBox key={work.id} work={work} />)}
            </WorksGridContainer>
          </Box>
        </section>
      </Container>
    </>
  );
}
