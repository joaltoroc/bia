"use client";

import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  regions: string[];
};

type Event = React.ChangeEvent<HTMLInputElement> &
  React.MouseEvent<HTMLSelectElement>;

export const CountriesFilter = ({ regions }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value || value === "-") {
        params.delete(name);
        return params.toString();
      }

      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const updateQuery = useCallback(
    (name: string, { target: { value } }: Event) => {
      return router.push(`${pathname}?${createQueryString(name, value)}`);
    },
    [createQueryString, pathname, router]
  );

  return (
    <div className="sm:flex">
      <div className="flex-1">
        <div className="relative text-primary">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
          <input
            type="search"
            className="input input-bordered py-2 text-primary bg-base-300 pl-10 max-w-md w-full"
            placeholder="Search for a country..."
            autoComplete="off"
            onChange={(event: Event) => updateQuery("search", event)}
            defaultValue={searchParams.get("search") || ""}
          />
        </div>
      </div>
      <div className="flex-none max-w-md sm:max-w-52 w-full mt-2 sm:mt-0">
        <select
          className="select bg-base-300 shadow-md w-full text-primary"
          defaultValue={searchParams.get("region")?.toLowerCase() || "-"}
          onClick={(event: Event) => updateQuery("region", event)}
        >
          <option value="-">Filter by Region</option>
          {regions.map((region) => (
            <option key={region} value={region.toLowerCase()}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
