import { Links } from "@/components/layout/Header/Links";
import { render, screen } from "@testing-library/react";
import { describe, vi } from "vitest";
import { useRouter } from "next/router";

vi.mock("next/router", () => ({
  useRouter: vi.fn(),
}));

describe("Header links", () => {
  it("should render links correctly", () => {
    (useRouter as any).mockReturnValue({ asPath: "/" });

    render(<Links />);

    const link1 = screen.getByTestId("home-link");
    const link2 = screen.getByTestId("favorites");

    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
  });

  it("should render link 'tela incial' active when user is in home", () => {
    (useRouter as any).mockReturnValue({ asPath: "/" });

    render(<Links />);

    const link = screen.getByTestId("home-link");
    expect(link).toHaveClass("active");
  });

  it("should render link 'favoritos' active when user is in favorites", () => {
    (useRouter as any).mockReturnValue({ asPath: "/favorites" });

    render(<Links />);

    const link = screen.getByTestId("favorites");
    expect(link).toHaveClass("active");
  });

  it("should not to render link 'tela incial' active when user is not in home", () => {
    (useRouter as any).mockReturnValue({ asPath: "/favorites" });

    render(<Links />);

    const link = screen.getByTestId("home-link");
    expect(link).not.toHaveClass("active");
  });

  it("should not to render link 'favoritos' active when user is not in favorites", () => {
    (useRouter as any).mockReturnValue({ asPath: "/" });

    render(<Links />);

    const link = screen.getByTestId("favorites");
    expect(link).toHaveClass("active");
  });
});
