import { render, screen } from "@testing-library/react";
import { MockedFunction, beforeEach, describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import { MobileMenu } from "@/components/layout/Header/MobileMenu";
import { useRouter } from "next/router";
import { Links } from "@/components/layout/Header/Links";

const initialProps = {
  handleOpen: () => {},
  open: false,
};

vi.mock("next/router", () => ({
  useRouter: vi.fn(),
}));

describe("Header mobile menu", () => {
  beforeEach(() => {
    (useRouter as MockedFunction<any>).mockReturnValue({ asPath: "/" });
    render(<MobileMenu {...initialProps} />);
  });

  it("should renders mobile menu correctly", () => {
    const menu = screen.getByTestId("hamburger-menu");
    expect(menu).toBeInTheDocument();
  });

  it("should opens menu when it gets clicked", async () => {
    render(<Links />);

    const menu = screen.getByTestId("hamburger-menu");
    await userEvent.click(menu);

    const homeLink = screen.getByTestId("home-link");
    const favoriteLink = screen.getByTestId("favorites");

    expect(homeLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });
});
