import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";

const MovieDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(id);
  // console.log(data);
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  // console.log(singlePhone);
  const { title, image, description, cast, director } = singlePhone || {};
  return (
    <div className="py-10">
      <img
        className="w-[440px] h-[250px] object-cover object-center mx-auto"
        src={image}
        alt="banner-image"
      />
      <div className="flex justify-between">
        <h1 className="text-5xl font-thin">{title}</h1>
        <div className="flex space-x-4">
          <Button label="cart" />
          <Button label="favorite" />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
