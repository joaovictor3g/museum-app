import { NotFoundContainer } from "@/components/pages/404/styles";
import Image from "next/image";

import notFoundImg from "@/assets/404.png";
import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
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
      </NotFoundContainer>
    </>
  );
}
