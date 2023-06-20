import { Work } from "@/@types/work";
import { Box, SectionInfos } from "@/components/pages/WorkDetail";
import { SectionOtherWorks } from "@/components/pages/WorkDetail/SectionOtherWorks";
import { MainInfoContainer, Separator, Wrapper } from "@/components/styled";
import { ids } from "@/constants/ids";
import { api } from "@/services/api";
import { loadWorks } from "@/services/load-works";
import { addEllipsisOnStringBiggerThan50 } from "@/utils";
import { AxiosError } from "axios";
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
        <meta name="og:image" content="/banner.png" />
        <meta name="image" property="og:image" content="/banner.png" />
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
          <Separator css={{ "--margin": "72px" }} />
          <SectionOtherWorks work={work} />
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

  try {
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
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response && err.response.status === 404) {
        return {
          redirect: {
            permanent: false,
            destination: "/404",
          },
        };
      }

      if (err.response && err.response.status === 500) {
        return {
          redirect: {
            permanent: false,
            destination: "/500",
          },
        };
      }
    }

    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
};
