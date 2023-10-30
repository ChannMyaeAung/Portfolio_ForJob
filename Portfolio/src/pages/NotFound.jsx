import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../style";
/* Lottie Animation */
import Lottie from "lottie-react";
import errorPandaAnimation from "../assets/animations/error_animation.json";
const NotFound = () => {
  return (
    <section
      aria-label="404 Not Found"
      id="not__found"
      className={`${styles.flexCenter} flex-col w-[90%] md:w-full mx-auto`}
    >
      <Lottie
        animationData={errorPandaAnimation}
        className="aspect-[16/9] w-[500px]"
        aria-hidden
      />

      <NavLink
        to={`/`}
        className={`primary__button`}
        aria-label="Back to Home Page"
      >
        Back to Home
      </NavLink>
    </section>
  );
};

export default NotFound;
