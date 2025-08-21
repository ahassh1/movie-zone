import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
      </div>

      {/* <div className="min-h-[calc(100vh-284px)] py-5">
        <Outlet />
      </div> */}

      <Footer />
    </>
  );
};

export default MainLayout;
