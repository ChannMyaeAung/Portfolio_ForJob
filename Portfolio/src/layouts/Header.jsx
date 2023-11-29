import React from "react";
import Navbar from "../components/navbar/Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
      <Navbar />
    </header>
  );
};

export default Header;
