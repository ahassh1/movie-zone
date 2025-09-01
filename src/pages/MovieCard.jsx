import React from "react";
import { Link } from "react-router";
import Button from "../components/ui/Button";

const MovieCard = ({ movie }) => {
  const { title, image, description, cast, director, id } = movie || {};
  return (
    <div>
      <div className="card bg-sky-100 w-96 shadow-xl/20 my-4 mx-auto">
        <figure className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-60  object-cover transition-transform duration-300 hover:scale-110"
          />
        </figure>
        <div className="card-body">
          <div className="justify-between items-center flex">
            <div>
              <h1 className="card-title text-gray-700">{title}</h1>
            </div>
            <div>
              <h2 className="flex">
                <span className="font-semibold text-gray-500">Cast:</span>
                <p className="text-gray-500">{cast.slice(0, 15)}</p>
              </h2>
            </div>
          </div>
          <p className="text-gray-500">{description.slice(0, 100)}</p>

          <div className="card-actions justify-between items-center">
            <div>
              <h3 className="font-semibold text-[15px] text-gray-600">
                Director:{" "}
                <span className="text-gray-500 text-[14px]">{director}</span>
              </h3>
            </div>

            <Link to={`/movie-details/${id}`}>
              <Button label="More Details" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
