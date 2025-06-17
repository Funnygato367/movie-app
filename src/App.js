import React, { useState, useEffect } from "react";
import SearchBar from "./movie-components/SearchBar";
import MovieList from "./movie-components/MovieList";

const API_KEY = "896df18e"; // Your OMDb API key
const DEFAULT_SEARCH = "Batman"; // Default movies shown on load

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await res.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setMovies([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    fetchMovies(searchTerm);
  };

  useEffect(() => {
    fetchMovies(DEFAULT_SEARCH);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎥 Movie Search App</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearchSubmit={handleSearchSubmit}
      />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
