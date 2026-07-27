// SortFilter Component - components/SortFilter.tsx
import React, { useState } from "react";
import styles from "../styles/SortFilter.module.css";

interface SortFilterProps {
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

const SortFilter: React.FC<SortFilterProps> = ({
  sortOrder,
  setSortOrder,
  selectedRegion,
  setSelectedRegion,
}) => {
  const [sortOpen, setSortOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);

  const sortOptions = [
    { value: "asc", label: "Sort by Population (Ascending)" },
    { value: "desc", label: "Sort by Population (Descending)" },
  ];

  const regionOptions = [
    { value: "", label: "All Regions" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  const currentSort = sortOptions.find((opt) => opt.value === sortOrder);
  const currentRegion = regionOptions.find((opt) => opt.value === selectedRegion);

  return (
    <div className={styles["sort-filter"]}>
      {/* Sort Dropdown */}
      <div className={styles["dropdown-container"]}>
        <button
          className={`${styles["dropdown-button"]} ${sortOpen ? styles.active : ""}`}
          onClick={() => setSortOpen(!sortOpen)}
          aria-haspopup="listbox"
          aria-expanded={sortOpen}
        >
          <span className={styles["dropdown-label"]}>📊 {currentSort?.label}</span>
          <svg
            className={`${styles["dropdown-icon"]} ${sortOpen ? styles.rotated : ""}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path d="M5 7l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {sortOpen && (
          <div className={styles["dropdown-menu"]}>
            {sortOptions.map((option) => (
              <button
                key={option.value}
                className={`${styles["dropdown-item"]} ${
                  option.value === sortOrder ? styles.selected : ""
                }`}
                onClick={() => {
                  setSortOrder(option.value as "asc" | "desc");
                  setSortOpen(false);
                }}
              >
                {option.label}
                {option.value === sortOrder && (
                  <span className={styles.checkmark}>✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Region Dropdown */}
      <div className={styles["dropdown-container"]}>
        <button
          className={`${styles["dropdown-button"]} ${regionOpen ? styles.active : ""}`}
          onClick={() => setRegionOpen(!regionOpen)}
          aria-haspopup="listbox"
          aria-expanded={regionOpen}
        >
          <span className={styles["dropdown-label"]}>🌍 {currentRegion?.label}</span>
          <svg
            className={`${styles["dropdown-icon"]} ${regionOpen ? styles.rotated : ""}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path d="M5 7l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {regionOpen && (
          <div className={styles["dropdown-menu"]}>
            {regionOptions.map((option) => (
              <button
                key={option.value}
                className={`${styles["dropdown-item"]} ${
                  option.value === selectedRegion ? styles.selected : ""
                }`}
                onClick={() => {
                  setSelectedRegion(option.value);
                  setRegionOpen(false);
                }}
              >
                {option.label}
                {option.value === selectedRegion && (
                  <span className={styles.checkmark}>✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortFilter;