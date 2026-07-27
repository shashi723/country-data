// Filtering Utility - utils/filtering.ts
import { Country } from "../types/Country";

export const filterCountriesByRegion = (
  countries: Country[] | undefined,
  region: string
): Country[] => {
  if (!Array.isArray(countries)) return [];
  if (!region) return countries;
  return countries.filter((country) => country.region === region);
};

export const searchCountries = (
  countries: Country[] | undefined,
  query: string
): Country[] => {
  if (!Array.isArray(countries)) return [];
  if (!query) return countries;

  const lowerQuery = query.toLowerCase();

  return countries.filter((country) => {
    try {
      const countryName = country.names?.common || "";
      const capital = country.capitals?.[0]?.name || "";

      return (
        countryName.toLowerCase().includes(lowerQuery) ||
        capital.toLowerCase().includes(lowerQuery)
      );
    } catch (e) {
      console.error("Error filtering countries:", e);
      return false;
    }
  });
};
