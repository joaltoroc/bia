import _last from "lodash/last";

import type { ICountry } from "@/types";

export const useCountry = (country?: ICountry) => {
  const nativeName =
    country &&
    _last(Object.values(country.name.nativeName).map((val) => val))?.common;

  const currencies =
    country &&
    Object.values(country.currencies)
      .map(({ name }) => name)
      .sort()
      .join(", ");

  const languages =
    country &&
    Object.values(country.languages)
      .map((value) => value)
      .sort()
      .join(", ");

  const capital = country?.capital.join(", ");

  const tld = country?.tld.join(", ");

  const population = country?.population.toLocaleString();

  return {
    borders: country?.bordersNames,
    capital,
    currencies,
    flags: {
      png: country?.flags.png || "",
      alt: country?.flags.alt || "",
    },
    languages,
    name: country?.name.common,
    nativeName,
    population,
    region: country?.region,
    subregion: country?.subregion,
    tld,
  };
};
