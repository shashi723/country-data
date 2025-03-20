// SortFilter Component - components/SortFilter.tsx
import React from "react";

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
  return (
    <div className="sort-filter">
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}>
        <option value="asc">Sort by Population (Ascending)</option>
        <option value="desc">Sort by Population (Descending)</option>
      </select>
      <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SortFilter;