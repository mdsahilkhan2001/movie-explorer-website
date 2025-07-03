import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api/tmdb";
import { useMovieList } from "../context/MovieListContext";
import MovieCard from "../components/MovieCard";

const MovieDetails = () => {
  const { id } = useParams();
  const { myList, dispatch } = useMovieList();
  const [data, setData] = useState({});

  useEffect(() => {
    fetchMovieDetails(id).then(setData);
  }, [id]);

  const isInList = myList.find(m => m.id === parseInt(id));
  const toggleList = () => {
    dispatch({ type: isInList ? "REMOVE" : "ADD", payload: data.details });
  };

  if (!data.details) return <p>Loading...</p>;

  const director = data.credits?.crew?.find(p => p.job === "Director")?.name;
  const cast = data.credits?.cast?.slice(0, 5).map(p => p.name).join(", ");

  return (
    <div style={{ padding: 20 }}>
      <img src={`https://image.tmdb.org/t/p/w300${data.details.poster_path}`} />
      <h1>{data.details.title}</h1>
      <p>⭐ {data.details.vote_average}</p>
      <p>{data.details.overview}</p>
      <p><b>Director:</b> {director}</p>
      <p><b>Cast:</b> {cast}</p>
      <button onClick={toggleList}>
        {isInList ? "Remove from My List" : "Add to My List"}
      </button>

      <h3>Similar Movies</h3>
      <div style={{ display: "flex", overflowX: "auto" }}>
        {data.similar?.results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieDetails;
