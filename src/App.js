// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './movie-components/MovieList';
import SearchBar from './movie-components/SearchBar';


const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '896df18e'; // Replace with your OMDb key

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMovies = async () => {
    if (!searchTitle.trim()) return;

    setLoading(true);
    setError('');
    try {
      const response = await axios.get(API_URL, {
        params: {
          apikey: API_KEY,
          s: searchTitle
        }
      });

      if (response.data.Response === 'True') {
        // We use mock values for genre/rating since OMDb's search doesn't return them
        const enriched = response.data.Search.map(movie => ({
          ...movie,
          rating: Math.floor(Math.random() * 5) + 6, // fake rating 6–10
          genre: ['Action', 'Drama', 'Comedy', 'Sci-Fi', 'Romance'][Math.floor(Math.random() * 5)] // fake genre
        }));
        setMovies(enriched);
      } else {
        setError(response.data.Error || 'No results found.');
        setMovies([]);
      }
    } catch (err) {
      setError('Error fetching movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesRating =
      selectedRating === '' || movie.rating >= parseInt(selectedRating);
    const matchesGenre =
      selectedGenre === '' || movie.genre === selectedGenre;
    return matchesRating && matchesGenre;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎬 Movie Search App</h1>
      <SearchBar
        title={searchTitle}
        setTitle={setSearchTitle}
        rating={selectedRating}
        setRating={setSelectedRating}
        genre={selectedGenre}
        setGenre={setSelectedGenre}
        onSearch={fetchMovies}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
