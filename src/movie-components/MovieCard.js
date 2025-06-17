// src/MovieCard.jsx
import React from 'react';

function MovieCard({ movie }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', backgroundColor: '#fafafa' }}>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
        alt={movie.Title}
        style={{ width: '100%', borderRadius: '4px' }}
      />
      <h3>{movie.Title}</h3>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
    </div>
  );
}

export default MovieCard;
