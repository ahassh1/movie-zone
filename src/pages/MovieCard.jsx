import React from "react";
import { Link } from "react-router";
import Button from "../components/ui/Button";
import { MdDeleteForever } from "react-icons/md";

const MovieCard = ({ movie, deletable }) => {
  const { title, image, description, cast, director, id } = movie || {};

  return (
    <div className="relative w-96 my-4 mx-auto">
      <div className="card bg-sky-100 shadow-xl/20">
        <figure className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h1 className="card-title text-gray-700">{title}</h1>
            <h2 className="flex">
              <span className="font-semibold text-gray-500">Cast:</span>
              <p className="text-gray-500 ml-1">
                {Array.isArray(cast) ? cast.slice(0, 3).join(", ") : cast}
              </p>
            </h2>
          </div>

          <p className="text-gray-500">{description?.slice(0, 100)}</p>

          <div className="card-actions justify-between items-center">
            <h3 className="font-semibold text-[15px] text-gray-600">
              Director:{" "}
              <span className="text-gray-500 text-[14px]">{director}</span>
            </h3>

            <Link to={`/movie-details/${id}`}>
              <Button label="More Details" />
            </Link>
          </div>
        </div>
      </div>
      {deletable && (
        <div className="absolute -top-2 -right-2 bg-gray-900 p-3 ml-5 rounded-full hover:bg-gray-300 group cursor-pointer">
          <MdDeleteForever
            size={20}
            className="text-gray-100 group-hover:text-gray-900"
          />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
