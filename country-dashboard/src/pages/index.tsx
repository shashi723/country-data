import React, { useMemo, useState, useCallback } from "react";

import useCountries from "../hooks/useCountries";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import SortFilter from "../components/SortFilter";
import CountryDetails from "../components/CountryDetails";
import DarkModeToggle from "../components/DarkModeToggle";

import { sortCountriesByPopulation } from "../utils/sorting";
import {
  filterCountriesByRegion,
  searchCountries,
} from "../utils/filtering";

import { Country } from "@/types/Country";

const Home = () => {
  const {
    countries,
    loading,
    error,
    hasMore,
    loadMore,
  } = useCountries();

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] =
    useState<Country | null>(null);

  /**
   * Filter + Search + Sort
   */
  const filteredCountries = useMemo(() => {
    let result = filterCountriesByRegion(countries, selectedRegion);
    result = searchCountries(result, search);
    result = sortCountriesByPopulation(result, sortOrder);
    return result;
  }, [countries, selectedRegion, search, sortOrder]);

  /**
   * Stable callback for IntersectionObserver
   */
  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore) {
      loadMore();
    }
  }, [loading, hasMore, loadMore]);

  /**
   * Infinite Scroll
   * IMPORTANT:
   * Hooks must always be called before any return statements.
   */
  const loaderRef = useIntersectionObserver({
    onIntersect: handleLoadMore,
    enabled: hasMore && !loading,
    rootMargin: "200px",
  });

  /**
   * Initial loading
   */
  if (loading && countries.length === 0) {
    return <h2>Loading countries...</h2>;
  }

  /**
   * Error state
   */
  if (error) {
    return (
      <div>
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="app-header">
        <div className="header-left">
          <h1>Country Dashboard</h1>
        </div>

        <div className="header-theme">
          <DarkModeToggle />
        </div>

        <div className="header-center">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        <div className="header-right">
          <SortFilter
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </div>
      </header>

      {selectedCountry && (
        <CountryDetails
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}

      <div className="grid">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.uuid}
            country={country}
            onClick={() => setSelectedCountry(country)}
          />
        ))}
      </div>

      {/* Infinite Scroll Trigger */}
      {hasMore && (
        <div
          ref={loaderRef}
          style={{
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading && <span>Loading more countries...</span>}
        </div>
      )}

      {/* End Message */}
      {!hasMore && countries.length > 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            color: "#888",
          }}
        >
          🎉 No more countries to load.
        </div>
      )}
    </div>
  );
};

export default Home;