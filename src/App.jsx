import { useState } from "react";

import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
