import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Favorite from "../pages/Favorite";

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
