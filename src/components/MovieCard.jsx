 const MovieCard = ({ movie }) => (
  <div style={{ width: 150, marginRight: 10 }}>
    <img
      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      alt={movie.title}
      width="100%"
    />
    <h4>{movie.title}</h4>
    <p>⭐ {movie.vote_average}</p>
  </div>
);

export default MovieCard;
