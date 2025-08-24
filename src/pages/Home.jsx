import React from "react";
import Hero from "../components/Hero";
import { useLoaderData } from "react-router";
import MoviesContainer from "../components/MoviesContainer";

const Home = () => {
  //data
  const data = useLoaderData();
  const handleSearch= (e,text) =>{
    e.preventDefault();
    console.log(text);
  }
  return (
    <div>
      <Hero handleSearch={={handleSearch}}/>
      <MoviesContainer movies={data} />
    </div>
  );
};

export default Home;
