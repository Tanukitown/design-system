import { Layout } from "./Layout";

import { render, screen } from "@testing-library/react";

describe("Layout", () => {
  it("renders header and footer", () => {
    // ARRANGE

    // ACT
    render(
      <Layout>
        <div>Content</div>
      </Layout>,
    );

    // ASSERT
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
