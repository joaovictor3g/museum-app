import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroSection, SearchSection } from "@/components/pages/Home";
import { SearchProvider } from "@/contexts/SearchContext";

import "../mocks/resize-observer";
import "../mocks/intersection-observer";

describe("Renders home correctly", () => {
  it("Should render the home section correctly", () => {
    render(<HeroSection />);
    const p = screen.getByTestId("explore");
    const span = screen.getByTestId("discover");
    const anchor = screen.getByTestId("scrolldown-anchor");

    expect(p).not.toBeNull();
    expect(span).not.toBeNull();
    expect(anchor).not.toBeNull();
  });

  it("should renders search section correctly", () => {
    render(
      <SearchProvider>
        <SearchSection />
      </SearchProvider>
    );

    const p = screen.getByTestId("hint");

    expect(p).not.toBeNull();
  });
});
