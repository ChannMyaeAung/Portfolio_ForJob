import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};

export default Header;
