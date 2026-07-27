import React from "react";
import { Country } from "@/types/Country";
import Image from "next/image";

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  onClick,
}) => {
  const flagSrc = country.flag?.url_png || country.flag?.url_svg || "";

  

  return (
    <div className="card" onClick={onClick}>
      {flagSrc ? (
        <Image
          src={flagSrc}
          alt={country.names?.common}
          width={320}
          height={200}
          className="country-flag"
        />
      ) : (
        <div className="flag-placeholder">
          No flag available
        </div>
      )}

      <h3>{country?.names?.common}</h3>

      <p>
        <strong>Capital:</strong>{" "}
        {country?.capitals?.[0]?.name ?? "N/A"}
      </p>

      <p>
        <strong>Population:</strong>{" "}
        {country?.population?.toLocaleString()}
      </p>

      <p>
        <strong>Region:</strong> {country.region}
      </p>
    </div>
  );
};

export default CountryCard;