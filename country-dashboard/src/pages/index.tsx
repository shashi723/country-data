// Main Page - pages/index.tsx
import React, { useState } from "react";
import useCountries from "../hooks/useCountries";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import SortFilter from "../components/SortFilter";
import CountryDetails from "../components/CountryDetails";
import DarkModeToggle from "../components/DarkModeToggle";
import { sortCountriesByPopulation } from "../utils/sorting";
import { filterCountriesByRegion, searchCountries } from "../utils/filtering";
import { Country } from "@/types/Country";

const Home = () => {
  const { countries, loading, error } = useCountries();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  let filteredCountries = filterCountriesByRegion(countries, selectedRegion);
  filteredCountries = searchCountries(filteredCountries, search);
  filteredCountries = sortCountriesByPopulation(filteredCountries, sortOrder);

  return (
    <div>
      <div className="controls">
        <DarkModeToggle />
        <SearchBar search={search} setSearch={setSearch} />
        <SortFilter
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      {selectedCountry && (
        <CountryDetails
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}
      <div className="grid">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            country={country}
            onClick={() => setSelectedCountry(country)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
