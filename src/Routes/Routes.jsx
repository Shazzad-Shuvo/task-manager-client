import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import PrivateRoute from "./PrivateRoute";
import TaskBoard from "../components/TaskBoard/TaskBoard";
import UpdateTask from "../components/UpdateTask/UpdateTask";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "tasks",
          element: <PrivateRoute><TaskBoard></TaskBoard></PrivateRoute>
        },
        {
          path: "updateTask/:id",
          element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/tasks/${params.id}`)
        },
      ]
    },
  ]);