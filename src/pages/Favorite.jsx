import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { getFavorite, removeFavorite } from "../utils";

const Favorite = () => {
  const [displayMovies, setDisplayMovies] = useState([]);
  useEffect(() => {
    const savedMovies = getFavorite();
    setDisplayMovies(savedMovies);
  }, []);
  const handleDelete = (id) => {
    removeFavorite(id);
    setDisplayMovies(getFavorite);
  };
  console.log(displayMovies);
  return (
    <div className=" py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {displayMovies.map((movie) => (
          <MovieCard
            handleDelete={handleDelete}
            key={movie.id}
            movie={movie}
            deletable={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
