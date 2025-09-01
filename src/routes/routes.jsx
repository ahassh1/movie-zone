import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Favorite from "../pages/Favorite";
import Contact from "../pages/Contact";
import MovieDetails from "../pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,

    children: [
      {
        // index: true, or
        path: "/",
        Component: Home,
        hydrateFallbackElement: <p>Loading , please wait ....</p>,
        loader: () => fetch("movies.json"),
      },
      {
        path: "/favorite",
        element: <Favorite />,
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
        path: "/movie-details/:polash",
        Component: MovieDetails,
        loader: () => fetch("../movies.json"),
      },
    ],
  },
]);

export default router;
