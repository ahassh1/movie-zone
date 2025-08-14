import React from "react";
import BannerImg from "../assets/horrorB.jpg";

const Hero = () => {
  return (
    <div>
      <img className="w-screen h-fit" src={BannerImg} alt="Banner Image" />
    </div>
  );
};

export default Hero;
