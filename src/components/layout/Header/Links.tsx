import Link from "next/link";
import { Nav } from "./styles";
import { useRouter } from "next/router";

export function Links() {
  const { asPath } = useRouter();

  return (
    <Nav>
      <ul>
        <li>
          <Link
            href="/"
            className={asPath === "/" ? "active" : ""}
            data-testid="home-link"
          >
            tela inicial
          </Link>
        </li>

        <li>
          <Link
            href="/favorites"
            className={asPath === "/favorites" ? "active" : ""}
            data-testid="favorites"
          >
            meus favoritos
          </Link>
        </li>
      </ul>
    </Nav>
  );
}
