import { Wrapper } from "@/components/styled";
import { HeaderContainer, MobileMenu, Nav, Overlay } from "./styles";
import Link from "next/link";

import logoImg from "@/assets/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { asPath } = useRouter();

  function handleResize(e: any) {
    if (e.target.innerWidth >= 768) {
      setMobileMenuOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [asPath]);

  return (
    <HeaderContainer className={mobileMenuOpen ? "mobile-menu-open" : ""}>
      <div className="fixed">
        <Wrapper className="header-wrapper">
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>

          <MobileMenu onClick={() => setMobileMenuOpen((current) => !current)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </MobileMenu>

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
