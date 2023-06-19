import { Work } from "@/@types/work";
import { EmptyState, ScrollReveal, WorkBox } from "@/components/layout";
import { Loading } from "@/components/layout/Loading";
import { Box, Container } from "@/components/pages/Favorites";
import { MainInfoContainer, WorksGridContainer } from "@/components/styled";
import { key } from "@/constants/localStorage";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { loadWorks } from "@/services/load-works";
import Head from "next/head";
import { useEffect, useState } from "react";

import emptyImg from "@/assets/empty-states/folder.png";

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
            {loading && (
              <div className="loading-container">
                <Loading />
              </div>
            )}

            {works && works.length > 0
              ? !loading && (
                  <>
                    <strong className="works-total">
                      Número total de obras: {works?.length ?? 0}
                    </strong>

                    <WorksGridContainer>
                      {!!works &&
                        !loading &&
                        works.map((work) => (
                          <ScrollReveal key={work.id}>
                            <WorkBox work={work} />
                          </ScrollReveal>
                        ))}
                    </WorksGridContainer>
                  </>
                )
              : !loading && (
                  <EmptyState
                    message="Você ainda não favoritou nenhuma arte."
                    img={emptyImg}
                  />
                )}
          </Box>
        </section>
      </Container>
    </>
  );
}
