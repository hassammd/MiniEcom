import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import ProductsDetails from "./Pages/ProductsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductsDetails />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>,
);
