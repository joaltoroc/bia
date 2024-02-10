import {
  getCountries,
  getBorderCountries,
  getCountry,
} from "./countries.services";
import type { ICountry } from "@/types";

describe("getCountries function", () => {
  it("fetches countries data correctly", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve([]) })
    );

    const countries = await getCountries({
      region: "Europe",
      search: "Germany",
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(countries).toBeDefined();
  });
});

describe("getBorderCountries function", () => {
  it("fetches bordering countries data correctly", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve([]) })
    );

    const country: ICountry = {
      borders: ["DEU"],
      flags: {
        alt: "",
        png: "",
        svg: "",
      },
      name: {
        common: "",
        official: "",
        nativeName: {},
      },
      cca3: "",
      capital: [],
      tld: [],
      region: "",
      subregion: "",
      population: 0,
      currencies: {},
      languages: {},
    };
    const borderCountries = await getBorderCountries(country);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(borderCountries).toBeDefined();
  });
});

describe("getCountry function", () => {
  it("fetches country data correctly", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve([]) })
    );

    const countryData = await getCountry("DEU");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(countryData).toBeDefined();
  });
});
