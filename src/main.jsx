import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./Components/Home/Banner/Banner.jsx";
import NavBar from "./Components/Header/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {" "}
        <NavBar></NavBar> <Banner></Banner> <Footer></Footer>{" "}
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
