import React from "react";
import { useLoaderData } from "react-router";

const MovieDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>Movie Details</h2>
    </div>
  );
};

export default MovieDetails;
