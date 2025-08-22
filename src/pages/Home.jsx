import React from "react";
import Hero from "../components/Hero";
import { useLoaderData } from "react-router";
import MoviesContainer from "../components/MoviesContainer";

const Home = () => {
  //data
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Hero />
      <MoviesContainer movies={data} />
    </div>
  );
};

export default Home;
