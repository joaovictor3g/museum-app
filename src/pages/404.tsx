import { NotFoundContainer } from "@/components/pages/404/styles";
import Image from "next/image";

import notFoundImg from "@/assets/errors/404.png";
import Head from "next/head";
import Link from "next/link";
import { Blur2 } from "@/components/styled";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
        <meta name="og:image" content="/banner.png" />
        <meta name="image" property="og:image" content="/banner.png" />
        <meta name="og:title" content="Não encontrado" />
        <meta name="og:description" content="Conteúdo não foi encontrado" />
      </Head>
      <NotFoundContainer>
        <Image src={notFoundImg} alt="Conteúdo não encontrado" />
        <div className="text-content">
          <h1>Página não encontrada</h1>
          <span>Não foi encontrada a página que você procura.</span>
        </div>
        <Link href="/" className="back-home">
          Voltar a tela inicial
        </Link>
        <Blur2 />
      </NotFoundContainer>
    </>
  );
}
