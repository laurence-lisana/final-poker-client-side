import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Signup from "./Signup";
import Login from "./Login";
import APPCONTEXT from "./AppContext";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "./Game";
import "./style.css";
function APP(){
const [token,setToken]=useState("")
const [user ,setUser]=useState("")
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/game",
      element:<Game/>
    }

  ]);
  return(
  <div>
    <APPCONTEXT.Provider value={{ user, setUser, token, setToken }}>
    <RouterProvider router={router} />
    </APPCONTEXT.Provider>
  </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<APP/>);
