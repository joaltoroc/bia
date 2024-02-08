import _uniq from "lodash/uniq";

import { CountriesFilter } from "@/countries/countries-filter.component";

import type { ICountry } from "@/types/country.types";
import { CountryCard } from "@/components/country/country-card.component";

type SearchParams = {
  region?: string;
  search?: string;
};

type Props = {
  params: object;
  searchParams: SearchParams;
};

async function getCountries({ region: regionFilter, search }: SearchParams) {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,cca3,population,capital"
  );
  const data: ICountry[] = await res.json();

  return {
    countries: data.filter(
      ({ region, name: { common } }) =>
        region === (regionFilter || region) &&
        common
          .toLowerCase()
          .includes(search?.toLowerCase() || common.toLowerCase())
    ),
    regions: _uniq<string>(data.map(({ region }) => region)).sort(),
  };
}

export default async function Home({ searchParams }: Props) {
  const { countries, regions } = await getCountries(searchParams);

  return (
    <div className="p-12 flex flex-col">
      <CountriesFilter regions={regions} />
      <div className="mt-12 sm:grid sm:grid-cols-3 md:grid-cols-4 gap-5">
        {countries.map((country: ICountry) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}
