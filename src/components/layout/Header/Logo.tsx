import Link from "next/link";

import logoImg from "@/assets/logo.svg";

export function Logo() {
  return (
    <Link href="/" data-testid="logo-link">
      <img src={logoImg.src} alt="Logo do museu" />
    </Link>
  );
}
