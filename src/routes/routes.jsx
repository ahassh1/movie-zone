import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";

import Contact from "../pages/Contact";
import MovieDetails from "../pages/MovieDetails";
import Favorite from "../pages/Favorite";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,

    children: [
      {
        // index: true,
        path: "/",
        Component: Home,
        hydrateFallbackElement: <p>Loading , please wait ....</p>,
        loader: () => fetch("../movies.json"),
      },
      {
        path: "/favorite",
        // element: <Favorites />,
        Component: Favorite,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/movie-details/:id",
        Component: MovieDetails,
        loader: () => fetch("../movies.json"),
      },
    ],
  },
]);

export default router;
