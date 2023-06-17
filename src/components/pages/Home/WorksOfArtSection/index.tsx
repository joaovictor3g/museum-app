import { MansoryContainer } from "@/components/styled";
import { Box, WorksOfArtSectionContainer } from "./styles";

import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Work } from "@/@types/work";

const requests = [
  231980, 470311, 208898, 469857, 207665, 189425, 472353, 471179, 205431,
].map((id) => api.get(`/objects/${id}`));

export function WorksOfArtSection() {
  const [works, setWorks] = useState<Work[]>([]);

  async function getImageWorks() {
    const responseObjects = await Promise.all(requests);
    const works = responseObjects.map<Work>(({ data }) => ({
      id: data.objectID,
      image: data.primaryImageSmall,
      name: data.title,
      author: data.artistDisplayName,
    }));

    setWorks(works);
  }

  useEffect(() => {
    getImageWorks();
  }, []);

  return (
    <WorksOfArtSectionContainer id="worksOfArt">
      <Box>
        <h1>Veja algumas obras</h1>

        <MansoryContainer className="mansory">
          {works.map((work) => (
            <figure key={work.id}>
              <img src={work.image} alt="" />

              <div className="work-info">
                <strong className="work-info-name">{work.name}</strong>
                <span className="work-info-author">{work.author}</span>
              </div>
            </figure>
          ))}
        </MansoryContainer>
      </Box>
    </WorksOfArtSectionContainer>
  );
}
