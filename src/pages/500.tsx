import { Error500Container } from "@/components/pages/500/styles";
import { Blur2 } from "@/components/styled";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import error500Img from "@/assets/errors/500.png";

export default function Error500() {
  return (
    <>
      <Head>
        <title>500 - Internal server error</title>
      </Head>
      <Error500Container>
        <Image src={error500Img} alt="Erro interno no servidor" />
        <div className="text-content">
          <h1>Erro interno</h1>
          <span>Um erro interno no servidor ocorreu.</span>
        </div>
        <Link href="/" className="back-home">
          Voltar a tela inicial
        </Link>
        <Blur2 />
      </Error500Container>
    </>
  );
}
