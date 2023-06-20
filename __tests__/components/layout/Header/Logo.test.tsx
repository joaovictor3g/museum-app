import { render, screen } from "@testing-library/react";
import { beforeEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";
import { Logo } from "@/components/layout/Header/Logo";

describe("Header Logo", () => {
  beforeEach(() => {
    render(<Logo />);
  });

  it("should renders logo correctly", async () => {
    const logoLink = screen.getByTestId("logo-link");
    expect(logoLink).not.toBeNull();
  });

  it("should click in logo to be redirected to /", async () => {
    const logoLink = screen.getByTestId("logo-link");
    await userEvent.click(logoLink);
    const pathname = window.location.pathname;
    expect(pathname).toEqual("/");
  });
});
