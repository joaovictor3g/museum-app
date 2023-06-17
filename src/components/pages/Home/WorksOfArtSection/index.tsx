import { MansoryContainer } from "@/components/styled";
import { Box, WorksOfArtSectionContainer } from "./styles";

import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Work } from "@/@types/work";
import Link from "next/link";
import { useSearch } from "@/hooks/useSearch";
import { Pagination, WorkBox } from "@/components/layout";

const requests = [
  231980, 470311, 208898, 469857, 207665, 189425, 472353, 471179, 205431,
].map((id) => api.get(`/objects/${id}`));

export function WorksOfArtSection() {
  const [works, setWorks] = useState<Work[]>([]);

  const {
    works: searchedWorks,
    total: totalSearchedWorks,
    handleChangePage,
    page,
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
        {!!searchedWorks ? (
          <div className="searched-works">
            <div className="results-pagination">
              <strong>Resultados ({totalSearchedWorks})</strong>
              <Pagination
                onChange={handleChangePage}
                page={page}
                totalPages={Math.ceil(totalSearchedWorks / 9)}
              />
            </div>
            <div className="grid">
              {searchedWorks.map((work) => (
                <WorkBox key={work.id} work={work} />
              ))}
            </div>
          </div>
        ) : (
          <>
            <h1>Veja algumas obras</h1>

            <MansoryContainer className="mansory">
              {works.map((work) => (
                <Link href={`/work/${work.id}`} key={work.id}>
                  <figure>
                    <img src={work.image} alt="" />

                    <div className="work-info">
                      <strong className="work-info-name" title={work.fullName}>
                        {work.name}
                      </strong>
                      <span className="work-info-author">{work.author}</span>
                    </div>
                  </figure>
                </Link>
              ))}
            </MansoryContainer>
          </>
        )}
      </Box>
    </WorksOfArtSectionContainer>
  );
}
