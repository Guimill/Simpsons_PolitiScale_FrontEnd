import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./assets/styles/sass/index.scss";
import Home from "./routes/Home";
import Error from "./routes/Error";
import Vote from "./routes/Vote";
import Bilan from "./routes/Bilan";
import Admin from "./routes/Admin";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "Vote/:name", element: <Vote /> },
  { path: "Bilan", element: <Bilan /> },
  { path: "admin", element: <Admin /> },
  { path: "*", element: <Error /> },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
