import { CountryCard } from "@/country/country-card.component";
import { CountriesFilter } from "@/countries/countries-filter.component";

import { getCountries } from "@/services/countries.services";

import type { ICountry, SearchParams } from "@/types";

type Props = {
  params?: object;
  searchParams?: SearchParams;
};

export default async function Home({ searchParams }: Props) {
  const { countries, regions } = await getCountries(
    searchParams as SearchParams
  );

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
