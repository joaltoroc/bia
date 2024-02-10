import "@testing-library/jest-dom";

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import type { ICountry } from "@/types";

import CountryDetail from "./country-detail.component";

// Mock useRouter hook
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

const mockCountry: ICountry = {
  name: {
    common: "Test Country",
    nativeName: {
      eng: {
        official: "Official Native Name",
        common: "Test Native Name",
      },
    },
    official: "Test Country",
  },
  currencies: {
    USD: {
      name: "US Dollar",
      symbol: "$",
    },
    EUR: {
      name: "Euro",
      symbol: "",
    },
  },
  languages: {
    en: "English",
    fr: "French",
  },
  capital: ["Capital City"],
  tld: [".test"],
  population: 1000000,
  region: "Test Region",
  subregion: "Test Subregion",
  bordersNames: ["Border1", "Border2"],
  flags: {
    png: "https://clipart-library.com/images/5cRKaAxKi.png",
    alt: "Flag Alt Text",
    svg: "",
  },
  cca3: "",
  borders: [],
};

describe("CountryDetail component", () => {
  it("renders country details correctly", () => {
    render(<CountryDetail country={mockCountry} />);

    const backButton = screen.getByRole("button", { name: /back/i });
    expect(backButton).toBeInTheDocument();

    const countryName = screen.getByText("Test Country");
    expect(countryName).toBeInTheDocument();

    const nativeName = screen.getByText("Test Native Name");
    expect(nativeName).toBeInTheDocument();
  });
});
