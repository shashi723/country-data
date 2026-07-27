import { useState, useEffect, useCallback } from "react";
import { Country } from "../types/Country";

const PAGE_SIZE = 10;

const useCountries = () => {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch all countries from static JSON
   */
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);

        const response = await fetch("/asset/country-data.json");

        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }

        const countryData = await response.json();

        const data: Country[] = countryData?.data?.objects;

        if (!Array.isArray(data)) {
          throw new Error("Invalid country data");
        }

        setAllCountries(data);

        // Load first page
        setCountries(data.slice(0, PAGE_SIZE));
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  /**
   * Whether more countries are available
   */
  const hasMore = countries.length < allCountries.length;

  /**
   * Load next page
   */
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate API delay (remove when using real API)
    setTimeout(() => {
      const start = page * PAGE_SIZE;
      const end = start + PAGE_SIZE;

      const nextCountries = allCountries.slice(start, end);

      setCountries((prev) => [...prev, ...nextCountries]);

      setPage((prev) => prev + 1);

      setLoading(false);
    }, 300);
  }, [page, allCountries, hasMore, loading]);

  return {
    countries,
    loading,
    error,
    hasMore,
    loadMore,
  };
};

export default useCountries;