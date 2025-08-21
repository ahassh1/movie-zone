import React from "react";
import BannerImg from "../assets/horror1.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[85vh] rounded-lg overflow-hidden">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover object-center"
        src={BannerImg}
        alt="banner-image"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Welcome to{" "}
          <span className="text-blue-400 hover:text-orange-600 cursor-pointer">
            MovieZone
          </span>
        </h1>
        <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
          Dive into the darkest corners of cinema — explore horror, violence,
          and twisted comedy like never before.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-1">
          <form>
            <input
              type="text"
              placeholder="search your movies now"
              className="bg-white border border-gray-300 rounded shadow-md py-2 md:px-16 px-9 focus:outline-none focus:shadow-outline"
            />
          </form>
          <button
            className="bg-blue-500 cursor-pointer
         hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-r-md transition duration-300"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
