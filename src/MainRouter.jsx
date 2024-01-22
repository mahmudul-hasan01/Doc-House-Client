import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home";
import LayOut from "./LayOut";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        }
      ]
    },
  ]);