import CountryDetail from "@/country/country-detail.component";
import { getCountry } from "@/services/countries.services";

type Params = {
  cca3: string;
};

type Props = {
  params: Params;
};

export default async function Country({ params: { cca3 } }: Props) {
  const country = await getCountry(cca3);

  return <CountryDetail country={country} />;
}
