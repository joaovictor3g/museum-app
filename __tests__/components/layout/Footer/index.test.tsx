import { Footer } from "@/components/layout/Footer";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("should renders footer correctly", () => {
    const text = screen.getByText(/Museu Metropolitano de Arte/);
    expect(text).toBeInTheDocument();
  });
});
