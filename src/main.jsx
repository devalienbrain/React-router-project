import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home";
import JobCategory from "./Components/Home/JobCategory/JobCategory";
import FeaturedJobs from "./Components/Home/FeaturedJobs/FeaturedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobDetails",
        element: <JobCategory></JobCategory>
      },
      {
        path: "/appliedJobs",
        element: <FeaturedJobs></FeaturedJobs>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
