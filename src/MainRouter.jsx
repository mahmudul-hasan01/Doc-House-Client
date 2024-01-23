import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home";
import LayOut from "./LayOut";
import SignUp from "./Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/Login' ,
          element: <SignUp></SignUp>
        },
        {
          path:'/SignUp' ,
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);