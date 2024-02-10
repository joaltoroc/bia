import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "./index";

describe("Footer component", () => {
  it("renders footer with correct content", () => {
    render(<Footer />);

    // Check if the name is rendered
    const nameElement = screen.getByText("John Alexander Toro Cortés");
    expect(nameElement).toBeInTheDocument();

    // Check if the email link is rendered with the correct href attribute
    const emailLink = screen.getByRole("link", { name: /joaltoroc@jatc\.co/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:joaltoroc@jatc.co");

    // Check if the website link is rendered with the correct href attribute and target attribute
    const websiteLink = screen.getByRole("link", {
      name: /https:\/\/jatc\.co/i,
    });
    expect(websiteLink).toBeInTheDocument();
    expect(websiteLink).toHaveAttribute("href", "https://jatc.co");
    expect(websiteLink).toHaveAttribute("target", "_blank");
  });
});
