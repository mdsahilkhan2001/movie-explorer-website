// src/context/MovieListContext.jsx

import { createContext, useReducer, useContext } from "react";

const MovieContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter(movie => movie.id !== action.payload);
    default:
      return state;
  }
};

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [], () => {
    const saved = localStorage.getItem("myList");
    return saved ? JSON.parse(saved) : [];
  });

  localStorage.setItem("myList", JSON.stringify(state));

  return (
    <MovieContext.Provider value={{ myList: state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieList = () => useContext(MovieContext);
export default MovieProvider;
