import React from "react";
import { useLoaderData, useParams } from "react-router";

const MovieDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(id);
  // console.log(data);
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  console.log(singlePhone);
  return (
    <div>
      <h2>Movie Details</h2>
    </div>
  );
};

export default MovieDetails;
