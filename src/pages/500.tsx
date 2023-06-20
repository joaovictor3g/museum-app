import { Error500Container } from "@/components/pages/500/styles";
import { Blur2 } from "@/components/styled";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import error500Img from "@/assets/errors/500.png";
import { GetStaticProps } from "next";

interface Error500Props {
  message?: string;
}

export default function Error500({ message }: Error500Props) {
  const errMsg = message ?? "Um erro interno no servidor ocorreu.";

  return (
    <>
      <Head>
        <title>500 - Internal server error</title>
        <meta name="og:image" content="../assets/errors/500.png" />
        <meta
          name="image"
          property="og:image"
          content="../assets/errors/500.png"
        />
        <meta name="og:title" content="Erro interno no servidor" />
        <meta name="og:description" content={errMsg} />
      </Head>
      <Error500Container>
        <Image src={error500Img} alt="Erro interno no servidor" />
        <div className="text-content">
          <h1>Erro interno no servidor</h1>
          <span>{errMsg}</span>
        </div>
        <Link href="/" className="back-home">
          Voltar a tela inicial
        </Link>
        <Blur2 />
      </Error500Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      message: ctx.params?.message ?? null,
    },
  };
};
