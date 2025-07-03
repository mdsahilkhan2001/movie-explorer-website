import { useMovieList } from "../context/MovieListContext";
import MovieCard from "../components/MovieCard";

const MyList = () => {
  const { myList } = useMovieList();

  return (
    <div style={{ padding: 20 }}>
      <h2>My List</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {myList.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MyList;
