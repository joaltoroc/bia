import _first from "lodash/first";
import _uniq from "lodash/uniq";

import type { ICountry, SearchParams } from "@/types";

const URLBase = "https://restcountries.com";
const Version = "v3.1";

export async function getCountries({
  region: regionFilter,
  search,
}: SearchParams) {
  const res = await fetch(
    `${URLBase}/${Version}/all?fields=name,flags,region,cca3,population,capital`
  );
  const data: ICountry[] = await res.json();

  return {
    countries: data.filter(
      ({ region, name: { common } }) =>
        region.toLowerCase() ===
          (regionFilter?.toLowerCase() || region.toLowerCase()) &&
        common
          .toLowerCase()
          .includes(search?.toLowerCase() || common.toLowerCase())
    ),
    regions: _uniq<string>(data.map(({ region }) => region)).sort(),
  };
}

export async function getBorderCountries(country: ICountry) {
  if (!country.borders || !country.borders.length) {
    return [];
  }

  const res = await fetch(
    `${URLBase}/${Version}/alpha?codes=${country.borders.join(",")}&fields=name`
  );
  const data: ICountry[] = await res.json();

  return data;
}

export async function getCountry(cca3: string) {
  const res = await fetch(
    `${URLBase}/${Version}/alpha/${cca3}?fields=flags,name,cca3,capital,tld,region,subregion,population,currencies,languages,borders`
  );
  const country: ICountry = await res.json();

  const bordersInfo = await getBorderCountries(country);

  const countryResponse: ICountry = {
    ...country,
    bordersNames: bordersInfo?.map<string>(({ name: { common } }) => common),
  };

  return countryResponse;
}
