import React from "react";
import MovieCard from "../pages/MovieCard";

const MoviesContainer = ({ movies }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12">
        {
          // movies.map(movie => (<MovieCard key={movie.id} movie={movie}/>))

          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </div>
  );
};

export default MoviesContainer;
