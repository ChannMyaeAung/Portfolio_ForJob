import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <main className="flex flex-col justify-between w-full min-h-screen">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
