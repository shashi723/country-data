// CountryDetails Component - components/CountryDetails.tsx
import React from "react";
import { Country } from "../types/Country";

interface CountryDetailsProps {
  country: Country;
  onClose?: () => void;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country, onClose }) => {
  return (
    <div className="country-details">
      <button onClick={onClose}>Close</button>
      <img src={country.flags.svg} alt={country.name.common} />
      <h2>{country.name.official}</h2>
      <p>Capital: {country.capital?.[0] || "N/A"}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Languages: {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
      <p>Currencies: {country.currencies ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ") : "N/A"}</p>
      <p>Timezones: {country.timezones.join(", ")}</p>
    </div>
  );
};

export default CountryDetails;