import { useEffect, useState } from "react";

import { Wrapper } from "@/components/styled";
import { HeaderContainer } from "./styles";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Links } from "./Links";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleResize(e: any) {
    if (e.target.innerWidth >= 768) {
      setMobileMenuOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderContainer className={mobileMenuOpen ? "mobile-menu-open" : ""}>
      <div className="fixed">
        <Wrapper className="header-wrapper">
          <Logo />
          <MobileMenu open={mobileMenuOpen} handleOpen={setMobileMenuOpen} />
          <Links />
        </Wrapper>
      </div>
    </HeaderContainer>
  );
}
