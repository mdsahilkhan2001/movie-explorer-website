

import { fallbackData } from "../mock/fallback";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (type) => {
  try {
    const res = await fetch(`${BASE_URL}/movie/${type}?api_key=${API_KEY}`);
    if (!res.ok) throw new Error("Failed API");
    return await res.json();
  } catch (e) {
    console.warn(`TMDB API failed for ${type}. Using fallback data.`);
    return fallbackData[type] || { results: [] };
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const [details, credits, similar] = await Promise.all([
      fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(res => res.json()),
      fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`).then(res => res.json()),
      fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`).then(res => res.json()),
    ]);
    return { details, credits, similar };
  } catch (e) {
    console.error("Movie detail fetch failed. Fallback not available for individual movies.");
    return { details: {}, credits: {}, similar: { results: [] } };
  }
};
