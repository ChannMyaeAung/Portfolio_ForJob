import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.jpg";
import styles from "../style";
import { NavLink } from "react-router-dom";
import { fadeInAnimations } from "../animation";
import { skills } from "../data";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
/* Lottie Animations */
import Lottie from "lottie-react";
import pointingAnimation from "../assets/animations/pointing_animation.json";

const Hero = () => {
  return (
    <article className={`${styles.paddingX}`}>
      <img
        src={about}
        alt=""
        className="w-[200px] h-[200px] object-cover mx-auto rounded-full"
      />

      <header className="m-3 text-center">
        <h1 className={`${styles.heading2} `}>
          <i>👋</i> <span className="primary__heading">Hi, I AM CHAN</span>
        </h1>

        <div className={`overflow-hidden`}>
          <motion.h2
            animate={{ y: 0 }}
            initial={{ y: 100 }}
            transition={{ delay: 0.5, duration: 0.65 }}
            className="text-[25px] sm:tracking-[1px] font-semibold text-[#cab197] sm:text-[30px] text-center"
          >
            <br className="flex sm:hidden" /> FRONTEND{" "}
            <br className="flex sm:hidden" /> WEB DEVELOPER
          </motion.h2>
        </div>
      </header>

      <section className="flex flex-col items-center justify-center gap-3 border-none">
        <p
          className={`${styles.paragraph} w-[95%] sm:w-full max-w-[470px] px-3 mx-auto sm:text-center text-justify`}
        >
          A passionate front-end developer with expertise in{" "}
          <strong className="text-indigo-600">
            HTML, CSS, SASS/SCSS, Javascript, Bootstrap, Tailwind CSS, ReactJS,
            Typescript & Framer Motion.
          </strong>{" "}
          With a keen eye for detail and a deep understanding of UI/UX, I strive
          to create visually stunning and highly functional websites.
        </p>

        {/* Programming languages icons */}

        <motion.div
          className={`${styles.flexCenter} px-3 w-[95%] md:w-full max-w-[470px] md:max-w-full mt-3 gap-3 flex-wrap `}
        >
          {skills.map((skill, index) => {
            const { id, title, icon } = skill;
            return (
              <motion.i
                key={id}
                className="w-[48px] h-[48px] overflow-hidden"
                variants={fadeInAnimations}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}
              >
                <img src={icon} alt={title} className="" />
              </motion.i>
            );
          })}
        </motion.div>

        {/* Introductory Message */}
        <div className="my-3 text-justify">
          <p className={`${styles.paragraph} `}>
            Welcome to my virtual home on the internet. I'm delighted to have
            you here and I want to extend my heartfelt thanks for taking the
            time to explore what I've built.
          </p>

          <p className={`${styles.paragraph} `}>
            Feel free to wander through various pages and sections, and if you
            have any questions or feedback or simply to connect, don't hesitate
            to reach out by clicking the button below.
          </p>
        </div>

        {/* Pointing Animation from Lottie */}
        <Lottie
          className="w-[100px] aspect-[16/9]"
          animationData={pointingAnimation}
        />

        {/* Reach out Button */}
        <a
          href="mailto: chanmyaeaung@my.jcu.edu.au"
          style={{ marginTop: "0" }}
          className={` ${styles.cursorTransition} primary__button hover:text-[#c86800] hover:bg-white`}
          target="_blank"
        >
          Reach out
        </a>
        <div
          className={`flex flex-col px-3 items-start w-full max-w-[600px] mx-auto justify-start gap-6 xs:gap-0 xs:flex-row xs:items-center xs:justify-between mt-16 mb-8`}
        >
          <NavLink
            to={`aboutme`}
            className={`border-black ${styles.flexCenter} gap-2 text-black shadow-shadow_btn bg-btn_green py-1 px-6 underline-offset-8  duration-200 hover:text-white`}
          >
            About Me <SendOutlinedIcon />
          </NavLink>

          <NavLink
            to={`projects`}
            className={`border-black ${styles.flexCenter} gap-2 text-black shadow-shadow_btn bg-btn_green py-1 px-6 underline-offset-8  duration-200 hover:text-white`}
          >
            View my work <SendOutlinedIcon />
          </NavLink>
        </div>
      </section>
    </article>
  );
};

export default Hero;
