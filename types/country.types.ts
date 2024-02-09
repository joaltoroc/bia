export interface ICountry {
  flags: Flags;
  name: Name;
  cca3: string;
  capital: string[];
  tld: string[];
  region: string;
  subregion: string;
  population: number;
  currencies: Currency;
  languages: Languages;
  borders: string[];
  bordersNames?: string[];
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  [key: string]: Native;
}

export interface Native {
  official: string;
  common: string;
}

export interface Currency {
  [key: string]: InfoCurrency;
}

export interface InfoCurrency {
  name: string;
  symbol: string;
}

export interface Languages {
  [key: string]: string;
}
