import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
    },
  ]);