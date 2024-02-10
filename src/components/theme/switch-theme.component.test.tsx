import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";

import { SwitchTheme } from "./switch-theme.component";

describe("SwitchTheme component", () => {
  it("renders switch theme component with icons", () => {
    render(<SwitchTheme />);

    const checkboxInput = screen.getByRole("checkbox");
    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).toHaveAttribute("type", "checkbox");
  });

  it("switches theme when checkbox is clicked", () => {
    render(<SwitchTheme />);

    const checkboxInput = screen.getByRole("checkbox");
    checkboxInput.click();
  });
});
