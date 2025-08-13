import { createBrowserRouter } from "react-router";
import Favorites from "../Favorites";
import Home from "../pages/Home";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,

    children: [
      {
        // path: "/", or
        index: true,
        Component: Home,
      },
      {
        path: "/favorites",
        Component: Favorites,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/phone-details",
        element: <PhoneDetails />,
      },
    ],
  },
]);

export default router;
