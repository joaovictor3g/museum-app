import { Work } from "@/@types/work";
import { Box, SectionInfos } from "@/components/pages/WorkDetail";
import { SectionOtherWorks } from "@/components/pages/WorkDetail/SectionOtherWorks";
import { MainInfoContainer, Wrapper } from "@/components/styled";
import { ids } from "@/constants/ids";
import { api } from "@/services/api";
import { loadWorks } from "@/services/load-works";
import { addEllipsisOnStringBiggerThan50 } from "@/utils";
import { ArrowLeft } from "lucide-react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";

interface WorkDetailProps {
  work: Work;
}

export default function WorkDetail({ work }: WorkDetailProps) {
  return (
    <>
      <Head>
        <title>{work.name}</title>
        <meta name="og:image" content={work.imageSmall} />
        <meta name="image" property="og:image" content={work.imageSmall} />
        <meta name="og:title" content={work.name} />
      </Head>
      <div>
        <MainInfoContainer>
          <Wrapper>
            <Link href="/">
              <ArrowLeft size={18} />
              Voltar
            </Link>
          </Wrapper>
        </MainInfoContainer>
        <Box>
          <SectionInfos work={work} />
          <SectionOtherWorks author={work.author} />
        </Box>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const works = await loadWorks(ids);

  return {
    paths: works?.map((work) => ({ params: { id: String(work.id) } })) ?? [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params!.id;

  const response = await api.get(`/objects/${id}`);
  const work = response.data;

  return {
    props: {
      work: {
        ...work,
        name: addEllipsisOnStringBiggerThan50(work.title),
        fullName: work.title,
        id: work.objectID,
        image: work.primaryImage,
        author: work.artistDisplayName,
        constituents: work.constituents,
      },
    },
  };
};
