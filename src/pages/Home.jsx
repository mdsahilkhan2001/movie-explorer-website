 import { useEffect, useState } from "react";
import { fetchMovies } from "../api/tmdb"; // make sure the path is correct
import MovieSection from "../components/MovieSection";

const Home = () => {
  const [sections, setSections] = useState({});

  useEffect(() => {
    const load = async () => {
      const types = ["now_playing", "popular", "top_rated", "upcoming"];
      const data = {};
      for (const type of types) {
        data[type] = await fetchMovies(type);
      }
      console.log("Fetched movie data:", data);
      setSections(data);
    };
    load();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      {/* 🔽 You can write these lines */}
      <MovieSection title="Now Playing" movies={sections.now_playing?.results || []} />
      <MovieSection title="Popular" movies={sections.popular?.results || []} />
      <MovieSection title="Top Rated" movies={sections.top_rated?.results || []} />
      <MovieSection title="Upcoming" movies={sections.upcoming?.results || []} />
    </div>
  );
};

export default Home;
