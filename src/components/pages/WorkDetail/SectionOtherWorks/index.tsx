import { EmptyState, WorkBox } from "@/components/layout";
import { LoadingContainer, SectionOtherWorksContainer } from "./styles";
import { useWorks } from "@/hooks/useWorks";
import { WorksGridContainer } from "@/components/styled";
import { Loading } from "@/components/layout/Loading";

import emptyStateImg from "@/assets/empty-states/papers.png";
interface SectionOtherWorksProps {
  author: string;
}

export function SectionOtherWorks({ author }: SectionOtherWorksProps) {
  const { works, loading } = useWorks({
    params: { artistsOrCulture: true, q: author },
  });

  if (loading) {
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );
  }

  if (!works || works.length === 0)
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
        {works.map((work) => (
          <WorkBox key={work.id} work={work} />
        ))}
      </WorksGridContainer>
    </SectionOtherWorksContainer>
  );
}
