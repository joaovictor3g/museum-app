import { useRouter } from "next/router";
import { useEffect } from "react";
import { MobileMenuContainer } from "./styles";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  handleOpen(open: boolean): void;
}

export function MobileMenu({ open, handleOpen }: MobileMenuProps) {
  const { asPath } = useRouter();

  useEffect(() => {
    handleOpen(false);
  }, [asPath]); // eslint-disable-line

  return (
    <MobileMenuContainer
      onClick={() => handleOpen(!open)}
      data-testid="hamburger-menu"
    >
      {open ? <X /> : <Menu />}
    </MobileMenuContainer>
  );
}
