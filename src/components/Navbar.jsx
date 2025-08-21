import React from "react";
import { Link, NavLink } from "react-router";
import { MdFavorite } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="px-8 md:px-12 lg:px-16 xl:px-24 navbar p-0 shadow-sm bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="p-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow cursor-pointer"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-700" : " "
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-700" : " "
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-700" : " "
                }
                to="/cart"
              >
                <BiSolidCameraMovie size={20} />
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-700" : " "
                }
                to="/favorite"
              >
                <MdFavorite size={20} />
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="font-bold text-xl">
          <span className="text-white">Movie</span>
          <span className="text-orange-500">Zone</span>
        </a>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 cursor-pointer">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-white"
              }
            >
              About
            </NavLink>
          </li>

          {/* Movie Types dropdown */}
          <li className="relative group">
            <span className="text-white cursor-pointer">Movie-Types</span>
            <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-2 p-2 rounded-md w-48 z-50">
              <li>
                <NavLink
                  to="/type/violence"
                  className="hover:text-orange-500 block px-2 py-1"
                >
                  Violence
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/type/extreme-horror"
                  className="hover:text-orange-500 block px-2 py-1"
                >
                  Extreme Horror
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/type/horror-comedy"
                  className="hover:text-orange-500 block px-2 py-1"
                >
                  Horror Comedy
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Movie Types dropdown */}
          <li className="relative group">
            <span className="text-white cursor-pointer">Movie-List</span>
            <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-2 p-2 rounded-md w-48 z-50">
              <li>
                <NavLink
                  to="/type/violence"
                  className="hover:text-orange-500 block px-2 py-1"
                >
                  Horror-Drama
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/type/extreme-horror"
                  className="hover:text-orange-500 block px-2 py-1"
                >
                  Horror-Night
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/type/horror-comedy"
                  className="hover:text-orange-500 block px-2 py-1"
                >
                  Horror-series
                </NavLink>
                <NavLink
                  to="/type/horror-comedy"
                  className="hover:text-orange-500 block px-2 py-1"
                >
                  Horror-Hunting
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-white"
              }
            >
              Contact Now
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-white"
              }
            >
              <BiSolidCameraMovie size={20} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorite"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-white"
              }
            >
              <MdFavorite size={20} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
