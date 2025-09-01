import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { MdFavorite } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";

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
        className="w-[460px] h-[260px] object-cover object-center mx-auto"
        src={image}
        alt="banner-image"
      />
      <div className="flex justify-between pt-5">
        <h1 className="text-5xl font-thin">{title}</h1>
        <div className="flex space-x-4">
          <Button label={<BiSolidCameraMovie size={20} />} />
          <Button label={<MdFavorite size={20} />} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
