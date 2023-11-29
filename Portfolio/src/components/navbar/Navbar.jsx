import React, { Fragment, useState } from "react";
import styles from "../../style";
import { motion } from "framer-motion";
import logo from "../../assets/logo_transparent.png";
import { navLinks } from "../../data/nav";
import { NavLink } from "react-router-dom";
import logoAnimation from "../../assets/animations/logo_animation.json";
import Lottie from "lottie-react";

const variants = {
  open: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } },
  closed: { opacity: 0, y: "-100%", transition: { duration: 0.4 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function renderNavbar() {
    return (
      <>
        {/* Logo */}
        <NavLink to={`/`} className={`flex items-center `}>
          <Lottie
            animationData={logoAnimation}
            className="object-cover w-16 h-16"
          />
          <h1 className="text-xl font-extrabold text-subtitle">
            Chan Myae Aung
          </h1>
        </NavLink>

        {/* Mobile Menu Toggle  Vanilla CSS used in index.css*/}
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className={`${isOpen ? "open" : ""} ${
            styles.cursorTransition
          } toggleMenu sm:hidden block z-[20]`}
        >
          <div className="toggleMenu__topBar"></div>
          <div className="toggleMenu__bottomBar"></div>
        </button>

        {/* Mobile menu Sidebar */}
        <motion.aside
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          aria-hidden={!isOpen}
          className={`${styles.sideBar} sm:hidden block`}
        >
          {/* Mobile Menu Sidebar links */}
          <ul
            role="menu"
            className="flex text-[18px] flex-col relative top-1/2 translate-y-[-50%] gap-3 text-white "
          >
            {navLinks.map(({ id, title, href }) => {
              return (
                <NavLink
                  to={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  key={id}
                  role="menuitem"
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                  className={`${styles.cursorTransition} hover:tracking-[3px] w-full mb-2 p-2 rounded-[7px]`}
                >
                  {title}
                </NavLink>
              );
            })}
          </ul>
        </motion.aside>

        {/* Tablets & above Navbar */}
        <div className="hidden sm:flex">
          <ul className="flex text-[14px] gap-3 text-subtitle">
            {navLinks.map((navLink) => {
              const { id, title, href } = navLink;

              return (
                <li
                  key={id}
                  className={`${styles.cursorTransition} hover:tracking-[1px] m-0 px-2 rounded-[7px]`}
                >
                  <a href={href}>{title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }

  return (
    <nav
      id="Navigation__Bar"
      role="navigation"
      aria-label="Main Navigation"
      className={`z-[999] w-full flex items-center justify-between mb-5 py-2 `}
    >
      {renderNavbar()}
    </nav>
  );
};

export default Navbar;
