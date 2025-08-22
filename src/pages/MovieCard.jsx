import React from "react";

const MovieCard = ({ movie }) => {
  const { title, image, description, cast, director } = movie;
  return (
    <div>
      <div className="card bg-sky-100 w-96 shadow-xl/20 my-4">
        <figure>
          <img
            className=" w-[320px] h-[330px] object-cover"
            src={image}
            alt="title"
          />
        </figure>
        <div className="card-body">
          <div className="justify-between items-center flex">
            <div>
              <h2 className="card-title">{title}</h2>
            </div>
            <div>
              <h2>
                <span className="font-semibold">Cast:</span> {cast.slice(0, 20)}
              </h2>
            </div>
          </div>
          <p className="text-gray-600">{description.slice(0, 100)}</p>

          <div className="card-actions justify-between items-center">
            <div>
              <h3 className="font-semibold text-[15px]">
                Director: <span className="text-gray-500">{director}</span>
              </h3>
            </div>
            <div>
              {" "}
              <button className="btn btn-primary hover:bg-orange-600 transition duration-500 hover:border-none border-none">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
