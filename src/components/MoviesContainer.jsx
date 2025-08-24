import React, { useEffect, useState } from "react";
import MovieCard from "../pages/MovieCard";

const MoviesContainer = ({ movies }) => {
  const [displayMovies, setDisplayMovies] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayMovies(movies);
    } else {
      setDisplayMovies(movies.slice(0, 6));
    }
  }, [movies, showAll]);

  return (
    <div className=" py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {displayMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <button
        onClick={() => {
          setShowAll((prv) => !prv);
          if (showAll) window.scroll(0, 600);
        }}
        href="#_"
        className="px-5 py-2.5 relative rounded group font-medium text-white mt-2 md:mt-5 lg:mt-7 xl:mt-9 inline-block cursor-pointer"
      >
        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span className="relative">{showAll ? "Show less" : "Show All"}</span>
      </button>
    </div>
  );
};

export default MoviesContainer;
