import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or capital"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
