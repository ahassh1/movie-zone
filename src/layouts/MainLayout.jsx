import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-red-400 min-h-[calc(100vh-284px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
