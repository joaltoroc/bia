"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import type { ICountry } from "@/types";

import { useCountry } from "./country.hook";

type Props = {
  country?: ICountry;
};

export default function CountryDetail({ country }: Props) {
  const router = useRouter();

  const {
    borders,
    capital,
    currencies,
    flags,
    languages,
    name,
    nativeName,
    population,
    region,
    subregion,
    tld,
  } = useCountry(country);

  const back = () => router.push("/");

  if (!country) {
    back();
    return;
  }

  const getParagraph = (name: string, value?: string) => (
    <p>
      <span className="font-bold">{name}: </span>
      {value}
    </p>
  );

  return (
    <section className="p-12 flex flex-col">
      <div className="max-w-36 mb-12">
        <button
          className="btn btn-secondary text-primary w-full shadow-md rounded-sm"
          onClick={back}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-16 items-center">
        <Image
          src={flags.png}
          alt={flags.alt}
          width={400}
          height={400}
          className="w-full"
        />
        <div className="w-full text-base text-primary items-center">
          <h1 className="font-bold text-3xl py-6">{name}</h1>

          <div className="sm:grid sm:grid-rows-5 sm:grid-flow-col gap-2">
            {getParagraph("Native Name", nativeName)}
            {getParagraph("Population", population)}
            {getParagraph("Region", region)}
            {getParagraph("Sub Region", subregion)}
            {getParagraph("Capital", capital)}
            {getParagraph("Top Level Domain", tld)}
            {getParagraph("Currencies", currencies)}
            {getParagraph("Languages", languages)}
          </div>

          {!!borders?.length && (
            <div className="mt-4">
              <span className="font-bold">Border Countries:</span>
              <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
                {borders?.map((border) => (
                  <span
                    key={border}
                    className="bg-secondary px-4 py-2 rounded-ms text-center"
                  >
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
