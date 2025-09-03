import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import { RouterProvider } from "react-router";

import router from "./routes/routes.jsx";
import CartProvider from "./providers/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <CartProvider> */}
    <RouterProvider router={router} />
    {/* </CartProvider> */}
  </StrictMode>
);
