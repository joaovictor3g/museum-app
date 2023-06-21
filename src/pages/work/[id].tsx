import { Work } from "@/@types/work";
import {
  Box,
  SectionInfos,
  SectionOtherWorks,
} from "@/components/pages/WorkDetail";
import { MainInfoContainer, Separator, Wrapper } from "@/components/styled";
import { ids } from "@/constants/ids";
import { loadWorks } from "@/services/load-works";

import { AxiosError } from "axios";
import { ArrowLeft } from "lucide-react";

import type { GetStaticProps, GetStaticPaths } from "next";
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
    const works = await loadWorks([Number(id)]);

    if (!works) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
      };
    }

    return {
      props: {
        work: works[0],
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
    }

    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
};
