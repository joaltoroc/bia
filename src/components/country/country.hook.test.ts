import { renderHook } from "@testing-library/react";

import type { ICountry } from "@/types";

import { useCountry } from "./country.hook";

describe("useCountry hook", () => {
  it("returns expected values when country data is provided", () => {
    const countryData: ICountry = {
      name: {
        common: "Test Country",
        nativeName: {
          eng: {
            official: "Official Native Name",
            common: "Native Name",
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
        png: "flag.png",
        alt: "Flag Alt Text",
        svg: "",
      },
      cca3: "",
      borders: [],
    };

    const { result } = renderHook(() => useCountry(countryData));

    expect(result.current).toEqual({
      borders: ["Border1", "Border2"],
      capital: "Capital City",
      currencies: "Euro, US Dollar",
      flags: { png: "flag.png", alt: "Flag Alt Text" },
      languages: "English, French",
      name: "Test Country",
      nativeName: "Native Name",
      population: "1,000,000",
      region: "Test Region",
      subregion: "Test Subregion",
      tld: ".test",
    });
  });

  it("returns undefined for all values when no country data is provided", () => {
    const { result } = renderHook(() => useCountry(undefined));

    expect(result.current).toEqual({
      borders: undefined,
      capital: undefined,
      currencies: undefined,
      flags: { png: "", alt: "" },
      languages: undefined,
      name: undefined,
      nativeName: undefined,
      population: undefined,
      region: undefined,
      subregion: undefined,
      tld: undefined,
    });
  });
});
