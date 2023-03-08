import React from 'react'
import ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './assets/styles/css/index.css'
import Home from './routes/Home'
import Error from "./routes/Error";
import Vote from './routes/Vote'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: ":name",
    element: <Vote />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);