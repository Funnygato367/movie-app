// src/MovieList.jsx
import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  if (movies.length === 0) return <p>No movies found.</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginTop: '20px' }}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
