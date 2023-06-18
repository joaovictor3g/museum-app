import { WorkBox } from "@/components/layout";
import { LoadingContainer, SectionOtherWorksContainer } from "./styles";
import { useWorks } from "@/hooks/useWorks";
import { WorksGridContainer } from "@/components/styled";
import { Loading } from "@/components/layout/Loading";

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
    return <strong>Nenhuma outra obra encontrada para este autor</strong>;

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
