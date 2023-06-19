import { MansoryContainer, WorksGridContainer } from "@/components/styled";
import { Box, ImageLink, WorksOfArtSectionContainer } from "./styles";

import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Work } from "@/@types/work";
import { useSearch } from "@/hooks/useSearch";
import {
  EmptyState,
  Pagination,
  ScrollReveal,
  WorkBox,
} from "@/components/layout";
import { Loading } from "@/components/layout/Loading";
import { ids } from "@/constants/ids";

import classNames from "classnames";

import emptyStateImg from "@/assets/empty-states/papers.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { loadWorks } from "@/services/load-works";

export function WorksOfArtSection() {
  const [works, setWorks] = useState<Work[]>([]);
  const [visible, ref] = useIntersectionObserver<HTMLDivElement>(true);

  const {
    works: searchedWorks,
    total: totalSearchedWorks,
    handleChangePage,
    page,
    loading,
  } = useSearch();

  async function getImageWorks() {
    const works = await loadWorks(
      ids.sort(() => Math.random() - 0.5).slice(0, 10)
    );

    if (works) setWorks(works);
  }

  useEffect(() => {
    getImageWorks();
  }, []);

  return (
    <WorksOfArtSectionContainer id="worksOfArt">
      <Box>
        {!!searchedWorks && (
          <>
            <div className="searched-works">
              <div className="results-pagination">
                <strong>
                  Resultados (
                  {new Intl.NumberFormat("pt-BR", { style: "decimal" }).format(
                    totalSearchedWorks
                  )}
                  )
                </strong>
                <Pagination
                  onChange={handleChangePage}
                  page={page}
                  totalPages={Math.ceil(totalSearchedWorks / 9)}
                />
              </div>
              <WorksGridContainer
                className={`grid ${loading ? "loading" : ""}`}
              >
                {loading ? (
                  <div className="loading-container">
                    <Loading />
                  </div>
                ) : (
                  searchedWorks.map((work, i) => (
                    <ScrollReveal key={work.id} delayMs={200}>
                      <WorkBox work={work} />
                    </ScrollReveal>
                  ))
                )}
              </WorksGridContainer>
            </div>
          </>
        )}

        {totalSearchedWorks === -1 && (
          <EmptyState
            img={emptyStateImg}
            message="Não foi encontrado nenhuma obra de acordo com os parâmetros de busca."
          />
        )}

        {!searchedWorks && totalSearchedWorks === 0 && (
          <>
            <h1>Veja algumas obras</h1>

            <MansoryContainer className="mansory" ref={ref}>
              {works.map((work, i) => (
                <ImageLink
                  key={work.id}
                  href={`/work/${work.id}`}
                  className={classNames({
                    hidden: !visible,
                    "on-view": visible,
                    even: i % 2 === 0,
                  })}
                  css={{ "--time": `${(i + 1 + 8) * 100}ms` }}
                >
                  <figure>
                    <img src={work.image} alt={work.name} />

                    <div className="work-info">
                      <strong className="work-info-name" title={work.fullName}>
                        {work.name}
                      </strong>
                      <span className="work-info-author">{work.author}</span>
                    </div>
                  </figure>
                </ImageLink>
              ))}
            </MansoryContainer>
          </>
        )}
      </Box>
    </WorksOfArtSectionContainer>
  );
}
