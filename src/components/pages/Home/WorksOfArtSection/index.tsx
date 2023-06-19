import { MansoryContainer, WorksGridContainer } from "@/components/styled";
import { Box, ImageLink, WorksOfArtSectionContainer } from "./styles";

import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Work } from "@/@types/work";
import { useSearch } from "@/hooks/useSearch";
import { EmptyState, Pagination, WorkBox } from "@/components/layout";
import { Loading } from "@/components/layout/Loading";
import { ids } from "@/constants/ids";

import classNames from "classnames";

import emptyStateImg from "@/assets/empty-states/papers.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const requests = ids.map((id) => api.get(`/objects/${id}`));

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
    const responseObjects = await Promise.all(requests);
    const works = responseObjects.map<Work>(({ data }) => ({
      id: data.objectID,
      image: data.primaryImageSmall,
      name: data.title,
      author: data.artistDisplayName,
      additionalImages: data.additionalImages,
      constituents: data.constituents,
      imageSmall: data.primaryImageSmall,
      isPublicDomain: data.isPublicDomain,
      fullName: data.title,
    }));

    setWorks(works);
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
                  searchedWorks.map((work) => (
                    <WorkBox key={work.id} work={work} />
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

            <MansoryContainer className="mansory">
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
            <div ref={ref} />
          </>
        )}
      </Box>
    </WorksOfArtSectionContainer>
  );
}
