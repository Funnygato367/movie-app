import React from "react";

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <>
      <h2>Available Movies:</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>{movie.Title} ({movie.Year})</li>
        ))}
      </ul>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ textAlign: "center" }}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/180x260?text=No+Image"}
              alt={movie.Title}
              style={{ width: "100%", height: "auto" }}
            />
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
