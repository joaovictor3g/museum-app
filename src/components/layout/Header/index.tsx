import { Wrapper } from "@/components/styled";
import { HeaderContainer, Nav } from "./styles";
import Link from "next/link";

import logoImg from "@/assets/logo.svg";
import Image from "next/image";

export function Header() {
  return (
    <HeaderContainer>
      <div className="fixed">
        <Wrapper className="header-wrapper">
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>

          <Nav>
            <ul>
              <li>
                <Link href="/" className="active">
                  tela inicial
                </Link>
              </li>

              <li>
                <Link href="/">meus favoritos</Link>
              </li>
            </ul>
          </Nav>
        </Wrapper>
      </div>
    </HeaderContainer>
  );
}
