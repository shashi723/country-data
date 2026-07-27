// Sorting Utility - utils/sorting.ts
import { Country } from "../types/Country";

export const sortCountriesByPopulation = (
  countries: Country[] | undefined,
  order: "asc" | "desc"
): Country[] => {
  if (!Array.isArray(countries)) return [];
  return [...countries].sort((a, b) =>
    order === "asc" ? a.population - b.population : b.population - a.population
  );
};

export const sortCountriesByName = (
  countries: Country[] | undefined,
  order: "asc" | "desc"
): Country[] => {
  if (!Array.isArray(countries)) return [];
  return [...countries].sort((a, b) =>
    order === "asc"
      ? a.names.common.localeCompare(b.names.common)
      : b.names.common.localeCompare(a.names.common)
  );
};
