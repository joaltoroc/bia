import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "./index";

describe("Header component", () => {
  it("renders header with switch theme component", () => {
    render(<Header />);

    // Check if the header text is rendered
    const headerText = screen.getByText(/where in the world?/i);
    expect(headerText).toBeInTheDocument();

    // Check if the switch theme component is rendered
    const switchThemeComponent = screen.getByRole("checkbox");
    expect(switchThemeComponent).toBeInTheDocument();
  });
});
