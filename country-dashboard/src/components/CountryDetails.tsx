import React, { useEffect, useState } from "react";
import { Country } from "../types/Country";

interface CountryDetailsProps {
  country: Country;
  onClose?: () => void;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country, onClose }) => {
  const flagSrc = country.flag?.url_svg || country.flag?.url_png || "";
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (!flagSrc) {
      setLoaded(true);
      return;
    }
    const img = new Image();
    img.src = flagSrc;
    img.onload = () => {
      if (!cancelled) setLoaded(true);
    };
    img.onerror = () => {
      if (!cancelled) setLoaded(true);
    };
    return () => {
      cancelled = true;
    };
  }, [flagSrc]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>

        {!loaded && (
          <div className="modal-loader" aria-hidden>
            <div className="spinner" />
          </div>
        )}

        {loaded && (
          <div className="country-details">
            {flagSrc ? (
              <img src={flagSrc} alt={country.names?.common || "flag"} className="country-flag" />
            ) : (
              <div className="flag-placeholder">No flag available</div>
            )}

            <div>
              <h2>{country.names?.official || country.names?.common}</h2>

              <p>
                <strong>Common Name:</strong> {country.names?.common || "N/A"}
              </p>

              <p>
                <strong>Capital:</strong>{" "}
                {country.capitals?.map((capital) => capital.name).join(", ") || "N/A"}
              </p>

              <p>
                <strong>Population:</strong>{" "}
                {country.population?.toLocaleString() || "N/A"}
              </p>

              <p>
                <strong>Region:</strong> {country.region || "N/A"}
              </p>

              <p>
                <strong>Sub Region:</strong> {country.subregion || "N/A"}
              </p>

              <p>
                <strong>Languages:</strong>{" "}
                {country.languages?.length ? country.languages.map((lang) => lang.name).join(", ") : "N/A"}
              </p>

              <p>
                <strong>Currencies:</strong>{" "}
                {country.currencies?.length
                  ? country.currencies.map((currency) => `${currency.name} (${currency.symbol})`).join(", ")
                  : "N/A"}
              </p>

              <p>
                <strong>Timezones:</strong>{" "}
                {country.timezones?.join(", ") || "N/A"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;