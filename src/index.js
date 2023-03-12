import React from 'react'
import ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './assets/styles/css/index.css'
import Home from './routes/Home'
import Error from "./routes/Error"
import Vote from './routes/Vote'
import Bilan from './routes/Bilan'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "Vote/:name",
    element: <Vote />
  },
  {
    path: "bilan",
    element: <Bilan />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);