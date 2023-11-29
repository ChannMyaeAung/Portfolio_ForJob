import React from "react";
import { NavLink } from "react-router-dom";
import { socialMediaLinks } from "../../data/data";
import { navLinks } from "../../data/nav";
import styles from "../../style";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-end w-full h-screen mt-16 snap-center">
      {/* Divider */}
      {/* <div
        className="w-[90%] mx-auto h-[1px] my-6 bg-dimWhite"
        id="footer__divider"
      /> */}
      {/* Pages and Social Media Links */}
      <div id="footer__top" className="grid grid-cols-2 place-items-center">
        {/* Pages */}
        <div id="footer__pages">
          <h2
            aria-label="Pages"
            className="font-semibold text-subtitle text-[20px]"
          >
            Pages
          </h2>

          <div className="flex flex-col gap-6 mt-3">
            {navLinks.map((link) => {
              const { id, title, href } = link;
              return (
                <NavLink
                  key={id}
                  to={href}
                  className={`text-dimWhite ${styles.cursorTransition} hover:text-primary_orange`}
                >
                  {title}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Social Media */}
        <div id="footer__social">
          <h2
            aria-label="Social Media"
            className="font-semibold text-subtitle text-[20px]"
          >
            Social
          </h2>

          <div className="flex flex-col gap-6 mt-3">
            {socialMediaLinks.map((link) => {
              const { id, title, icon, href } = link;
              return (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  aria-hidden="true"
                  className={`${styles.cursorTransition} hover:scale-105 hover:text-primary_orange flex flex-col items-center text-[24px]`}
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div id="footer__bottom" className="py-6 ">
        <h2 className="pt-3 text-center text-subtitle tracking-[2px]">
          ~CHAN MYAE AUNG~
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
