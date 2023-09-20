import React, { useState } from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo_transparent.png";
import { navLinks } from "../data";
import { NavLink } from "react-router-dom";
const variants = {
  open: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } },
  closed: { opacity: 0, y: "-100%", transition: { duration: 0.4 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" z-[3] w-full flex items-center justify-between mb-5 px-4 md:px-16 py-6 ">
      {/* Logo */}
      <NavLink to={`/`}>
        <img
          src={logo}
          alt="logo"
          className="w-[150px] md:w-[180px] h-[50px] object-contain"
        />
      </NavLink>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className={`${styles.cursorTransition} hover:text-primary_orange sm:hidden block`}
      >
        <AiOutlineMenu className="z-[2]" size={30} />
      </button>

      {/* Mobile menu Sidebar */}
      <motion.aside
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={`${styles.sideBar} sm:hidden block`}
      >
        <button
          className={`${styles.cursorTransition} mb-5 text-white  top-0  self-end flex hover:text-red-700`}
        >
          <AiOutlineClose size={25} onClick={() => setIsOpen(false)} />
        </button>
        {/* Mobile Menu Sidebar links */}
        <ul className="flex text-[18px] flex-col gap-3 text-white ">
          {navLinks.map((navLink) => {
            const { id, title, href } = navLink;

            return (
              <NavLink
                to={`${href}`}
                onClick={() => setIsOpen(false)}
                key={id}
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
    </nav>
  );
};

export default Navbar;
