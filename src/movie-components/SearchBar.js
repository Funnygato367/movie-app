// src/SearchBar.jsx
import React from 'react';

function SearchBar({ title, setTitle, rating, setRating, genre, setGenre, onSearch }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        placeholder="Search by title..."
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', width: '250px', marginRight: '10px' }}
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)} style={{ padding: '8px', marginRight: '10px' }}>
        <option value="">Rating</option>
        <option value="6">6+</option>
        <option value="7">7+</option>
        <option value="8">8+</option>
        <option value="9">9+</option>
      </select>
      <select value={genre} onChange={(e) => setGenre(e.target.value)} style={{ padding: '8px', marginRight: '10px' }}>
        <option value="">Genre</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Romance">Romance</option>
      </select>
      <button onClick={onSearch} style={{ padding: '8px 16px' }}>Search</button>
    </div>
  );
}

export default SearchBar;
