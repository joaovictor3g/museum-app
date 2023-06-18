import { WorkBox } from "@/components/layout";
import { SectionOtherWorksContainer } from "./styles";
import { useWorks } from "@/hooks/useWorks";
import { WorksGridContainer } from "@/components/styled";

interface SectionOtherWorksProps {
  author: string;
}

export function SectionOtherWorks({ author }: SectionOtherWorksProps) {
  const { works } = useWorks({ params: { artistsOrCulture: true, q: author } });

  if (!works || works.length === 0) return null;

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
