import { Wrapper } from "@/components/styled";
import { HeaderContainer, Nav } from "./styles";
import Link from "next/link";

import logoImg from "@/assets/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter();

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
                <Link href="/" className={asPath === "/" ? "active" : ""}>
                  tela inicial
                </Link>
              </li>

              <li>
                <Link
                  href="/favorites"
                  className={asPath === "/favorites" ? "active" : ""}
                >
                  meus favoritos
                </Link>
              </li>
            </ul>
          </Nav>
        </Wrapper>
      </div>
    </HeaderContainer>
  );
}
