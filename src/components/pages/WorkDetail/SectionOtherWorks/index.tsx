import { EmptyState, WorkBox } from "@/components/layout";
import { LoadingContainer, SectionOtherWorksContainer } from "./styles";
import { useWorks } from "@/hooks/useWorks";
import { WorksGridContainer } from "@/components/styled";
import { Loading } from "@/components/layout/Loading";

import emptyStateImg from "@/assets/empty-states/papers.png";
import { Work } from "@/@types/work";
import { useMemo } from "react";
interface SectionOtherWorksProps {
  work: Pick<Work, "author" | "id">;
}

export function SectionOtherWorks({ work }: SectionOtherWorksProps) {
  const { works, loading } = useWorks({
    params: { artistsOrCulture: true, q: work.author },
  });

  const filteredWorks = useMemo(
    () => works?.filter((_work) => _work.id !== work.id),
    [work.id, works]
  );

  if (loading) {
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );
  }

  if (!filteredWorks || filteredWorks.length === 0)
    return (
      <EmptyState
        message="Não encontramos outras obras do artista."
        img={emptyStateImg}
      />
    );

  return (
    <SectionOtherWorksContainer>
      <h1>Outras obras do artista</h1>

      <WorksGridContainer>
        {filteredWorks?.map((work) => (
          <WorkBox key={work.id} work={work} />
        ))}
      </WorksGridContainer>
    </SectionOtherWorksContainer>
  );
}
