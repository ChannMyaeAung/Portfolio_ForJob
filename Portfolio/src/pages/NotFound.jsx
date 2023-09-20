import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../style";
/* Lottie Animation */
import Lottie from "lottie-react";
import errorPandaAnimation from "../assets/animations/error_animation.json";
const NotFound = () => {
  return (
    <div
      id="not__found"
      className={`${styles.flexCenter} flex-col w-[90%] md:w-full mx-auto`}
    >
      <Lottie
        animationData={errorPandaAnimation}
        className="aspect-[16/9] w-[500px]"
      />

      <NavLink to={`/`} className={`primary__button`}>
        Back to Home
      </NavLink>
    </div>
  );
};

export default NotFound;
