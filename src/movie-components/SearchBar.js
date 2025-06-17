import React from "react";

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search for a movie..."
        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
      />
      <button type="submit" style={{ padding: "10px", marginLeft: "10px" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
