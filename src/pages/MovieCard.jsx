import React from "react";

const MovieCard = ({ movie }) => {
  const { title, image, description, cast, director } = movie;
  return (
    <div>
      <div className="card bg-sky-100 w-96 shadow-xl/20">
        <figure>
          <img
            className=" w-[320px] h-[330px] object-cover"
            src={image}
            alt="title"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary hover:bg-orange-600 transition duration-500 hover:border-none border-none">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
