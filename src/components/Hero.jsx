import React from "react";
import BannerImg from "../assets/horror1.jpg";

const Hero = () => {
  return (
    <div>
      <img
        className="w-full h-[85vh] object-cover object-center"
        src={BannerImg}
        alt="banner-image"
      />
    </div>
  );
};

export default Hero;
