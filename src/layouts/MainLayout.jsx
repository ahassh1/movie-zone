import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <div className="min-h-[calc(100vh-284px)]">
        <Outlet />
      </div> */}
      <Footer />
    </>
  );
};

export default MainLayout;
