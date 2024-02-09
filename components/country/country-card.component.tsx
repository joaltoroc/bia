"use client";

import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import type { ICountry } from "@/types";

type Props = {
  country: ICountry;
};

export const CountryCard = ({ country }: Props) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/${country.cca3}`);
  }, [country.cca3, router]);

  return (
    <div
      className="card bg-base-300 w-auto mb-4 sm:mb-0 shadow-md rounded-md cursor-pointer"
      onClick={handleClick}
    >
      <figure>
        <Image
          src={country.flags.png}
          alt={country.flags.alt}
          width={300}
          height={200}
          className="h-40"
        />
      </figure>
      <div className="p-4 text-primary gap-0">
        <h2 className="card-title font-bold text-md">{country.name.common}</h2>
        <p>
          <span className="font-bold text-sm">Population: </span>
          {country.population}
        </p>
        <p>
          <span className="font-bold text-sm">Region: </span>
          {country.region}
        </p>
        <p>
          <span className="font-bold text-sm">Capital: </span>
          {country.capital.join(",")}
        </p>
      </div>
    </div>
  );
};
