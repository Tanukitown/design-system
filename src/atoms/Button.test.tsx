import { Button } from "./Button";

import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("renders button with children", () => {
    // ARRANGE

    // ACT
    render(<Button>Click me</Button>);

    // ASSERT
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("applies variant classes", () => {
    // ARRANGE

    // ACT
    const { container } = render(<Button variant="secondary">Sec</Button>);

    // ASSERT
    expect(container.querySelector("button")).toHaveClass("bg-gray-200");
  });
});
