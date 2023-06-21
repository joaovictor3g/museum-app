import { Work } from "@/@types/work";
import {
  EmptyState,
  Pagination,
  ScrollReveal,
  WorkBox,
} from "@/components/layout";
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

  const [page, setPage] = useState(1);

  const { storage: workIds } = useLocalStorage<number[]>(key);

  useEffect(() => {
    if (workIds) {
      setLoading(true);
      loadWorks(workIds.slice((page - 1) * 9, page * 9))
        .then((data) => setWorks(data))
        .finally(() => setLoading(false));
    }
  }, [workIds, page]);

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
            {workIds && workIds.length > 0 ? (
              <>
                <header className="total-pagination">
                  <strong className="works-total">
                    Número total de obras: {workIds?.length ?? 0}
                  </strong>

                  <Pagination
                    onChange={setPage}
                    page={page}
                    totalPages={Math.ceil(workIds.length / 9)}
                  />
                </header>
                {!loading && (
                  <WorksGridContainer>
                    {!!works &&
                      !loading &&
                      works.map((work) => (
                        <ScrollReveal key={work.id}>
                          <WorkBox work={work} />
                        </ScrollReveal>
                      ))}
                  </WorksGridContainer>
                )}
              </>
            ) : (
              !loading && (
                <EmptyState
                  message="Você ainda não favoritou nenhuma arte."
                  img={emptyImg}
                />
              )
            )}

            {loading && (
              <div className="loading-container">
                <Loading />
              </div>
            )}
          </Box>
        </section>
      </Container>
    </>
  );
}
