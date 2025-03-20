// Filtering Utility - utils/filtering.ts
import { Country } from "../types/Country";

export const filterCountriesByRegion = (countries: Country[], region: string): Country[] => {
  if (!region) return countries;
  return countries.filter((country) => country.region === region);
};

export const searchCountries = (countries: Country[], query: string): Country[] => {
  if (!query) return countries;
  return countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase()) ||
      country.capital?.[0]?.toLowerCase().includes(query.toLowerCase())
  );
};