 import React from "react";
import "./MovieSection.css"; // optional for styling

const MovieSection = ({ title, movies }) => {
  return (
    <div className="movie-section">
      <h2>{title}</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h4>{movie.title}</h4>
            <p>⭐ {movie.vote_average}</p>
            <p>📅 {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
