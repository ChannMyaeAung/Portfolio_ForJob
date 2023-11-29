import React, { Fragment } from "react";
import { motion } from "framer-motion";
import about from "../../assets/about.jpg";
import styles from "../../style";
import { NavLink } from "react-router-dom";
import { fadeInAnimations } from "../../animation";
import { fadeIn } from "../../animation";
import { skills } from "../../data/data";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
/* Lottie Animations */
import Lottie from "lottie-react";
import pointingAnimation from "../../assets/animations/pointing_animation.json";
/* React Simple Typewriter Hook */
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  /* Typewriting Text Array */
  const [text] = useTypewriter({
    words: [
      "Problem-Solver",
      "Collaborative",
      "Detail-Oriented",
      "Curious",
      "Self-Motivated",
      "Adaptable",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  /* Func for rendering Header Section */
  function renderHeroHeader() {
    return (
      <div className="flex flex-col items-center sm:flex-row">
        <figure className="w-[200px] h-[200px] mx-auto ">
          <img
            src={about}
            alt="A portrait image of me"
            className="object-cover w-full h-full rounded-full"
          />
        </figure>

        <header className="m-3 text-center">
          <h1 className={`${styles.heading2}`}>
            <i>👋</i> <span className="primary__heading">Hi, I AM CHAN</span>
          </h1>

          <h3 className={`overflow-hidden`}>
            <motion.div
              animate={{ y: 0 }}
              initial={{ y: 100 }}
              transition={{ delay: 0.5, duration: 0.65 }}
              className="text-[25px] sm:tracking-[1px] font-semibold text-[#cab197] sm:text-[30px] text-center"
            >
              FRONTEND WEB DEVELOPER
            </motion.div>
          </h3>

          <h2 className="my-6 text-3xl font-bold text-[#cab197]">
            I am <span className={`${styles.typeWriter}`}>{text}</span>
            <Cursor cursorColor="#cab197" />
          </h2>
        </header>
      </div>
    );
  }

  /* Func for rendering body section */
  function renderHeroBody() {
    return (
      <div className="flex flex-col items-center justify-between">
        <motion.p
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className={`${styles.paragraph} px-3 mx-auto sm:text-center text-justify`}
        >
          A passionate front-end developer with a keen eye for detail and a deep
          understanding of UI/UX, I strive to create visually stunning and
          highly functional websites.
        </motion.p>

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

        {/* <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="px-3 my-3 text-justify sm:text-center"
        > */}
        {/* Reach out Button */}
        {/* <a
            href="mailto: chanmyaeaung@my.jcu.edu.au"
            style={{ marginTop: "0" }}
            className={` ${styles.cursorTransition} primary__button hover:text-[#c86800] hover:bg-white focus-visible::bg-white focus-visible:text-[#c86800]`}
            target="_blank"
          >
            Reach out
          </a> */}
        {/* </motion.div> */}
      </div>
    );
  }

  return (
    <article
      id="Introduction"
      aria-label="Introductory Hero Section"
      className={``}
    >
      <section className="flex flex-col items-center justify-center sm:gap-6">
        {renderHeroHeader()}
      </section>

      <section className="flex flex-col justify-center ">
        {renderHeroBody()}
      </section>
    </article>
  );
};

export default Hero;
