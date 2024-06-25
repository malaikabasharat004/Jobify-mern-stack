import React from "react";
import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  // const  [color, setColor] = useState("Olive")

  return (
    <>
    <Navbar />
    <Outlet />
    </>
  );
}

export default App;