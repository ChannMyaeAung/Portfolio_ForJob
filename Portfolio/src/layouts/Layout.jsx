import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <main className="flex flex-col justify-between w-full min-h-screen px-3.5 md:px-16">
      <ScrollToTop />
      <Header />

      <Outlet />

      <Footer />
    </main>
  );
};

export default Layout;
