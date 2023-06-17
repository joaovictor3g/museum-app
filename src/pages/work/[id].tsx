import { Work } from "@/@types/work";
import {
  BackContainer,
  Box,
  SectionInfos,
} from "@/components/pages/WorkDetail";
import { SectionOtherWorks } from "@/components/pages/WorkDetail/SectionOtherWorks";
import { Wrapper } from "@/components/styled";
import { api } from "@/services/api";
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
        <title>Work</title>
      </Head>
      <main>
        <BackContainer>
          <Wrapper>
            <Link href="/">
              <ArrowLeft size={18} />
              Voltar
            </Link>
          </Wrapper>
        </BackContainer>
        <Box>
          <SectionInfos work={work} />
          <SectionOtherWorks author={work.author} />
        </Box>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
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
        name: work.title,
        id: work.objectID,
        image: work.primaryImage,
        author: work.artistDisplayName,
        constituents: work.constituents,
      },
    },
  };
};
