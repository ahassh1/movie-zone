import React, { useEffect, useState } from "react";
import MovieCard from "../pages/MovieCard";
import Button from "./ui/Button";

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

      <Button
        onClick={() => {
          setShowAll((prv) => !prv);
          if (showAll) window.scroll(0, 600);
        }}
        label={showAll ? "Show less" : "Show All"}
      />
    </div>
  );
};

export default MoviesContainer;
