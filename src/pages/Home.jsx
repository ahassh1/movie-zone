import React, { useState } from "react";
import Hero from "../components/Hero";
import { useLoaderData } from "react-router";
import MoviesContainer from "../components/MoviesContainer";

const Home = () => {
  //data
  const data = useLoaderData();
  const [movies, setMovies] = useState(data);
  const handleSearch = (e, text) => {
    e.preventDefault();
    // console.log(text);
    const searchedMovies = data.filter(
      (movie) =>
        movie?.title?.toLowerCase().includes(text.toLowerCase()) ||
        movie?.cast?.toLowerCase().includes(text.toLowerCase())
    );
    // console.log(searchedPhones);
    setMovies(searchedMovies);
  };
  return (
    <div>
      <Hero handleSearch={handleSearch} />
      <MoviesContainer movies={movies} />
    </div>
  );
};

export default Home;
