import App from "../App.jsx"
import {createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {path: "/",element: <Home />},
      {path: "/login",element: <Home />},
      {path: "/sign-up",element: <Home />},

    ]
    },
  ]);
  
  export default router;