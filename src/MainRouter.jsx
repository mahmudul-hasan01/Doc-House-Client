import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home";
import LayOut from "./LayOut";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";

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
          element: <SignIn></SignIn>
        },
        {
          path:'/SignUp' ,
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);