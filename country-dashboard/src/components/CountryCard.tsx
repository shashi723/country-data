// Country Card Component - components/CountryCard.tsx
import React from "react";
import { Country } from "@/types/Country";

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={country.flags.png} alt={country.name.common} />
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital?.[0] || "N/A"}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
    </div>
  );
};

export default CountryCard;
