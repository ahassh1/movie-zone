import { createBrowserRouter } from "react-router";
import Favorites from "../Favorites";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <h1> error</h1>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorites",
        Component: Favorites,
        children: [
          {
            path: "more-nested",
            element: <p>this is inside favorites</p>,
          },
        ],
      },
    ],
  },
]);

export default router;
