// Sorting Utility - utils/sorting.ts
import { Country } from "../types/Country";

export const sortCountriesByPopulation = (
  countries: Country[],
  order: "asc" | "desc"
): Country[] => {
  return [...countries].sort((a, b) =>
    order === "asc" ? a.population - b.population : b.population - a.population
  );
};

export const sortCountriesByName = (
  countries: Country[],
  order: "asc" | "desc"
): Country[] => {
  return [...countries].sort((a, b) =>
    order === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common)
  );
};
