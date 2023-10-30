import React from "react";
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
      <>
        <img
          src={about}
          alt="A portrait image of me"
          className="w-[200px] h-[200px] object-cover mx-auto rounded-full"
        />

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
      </>
    );
  }

  /* Func for rendering body section */
  function renderHeroBody() {
    return (
      <>
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

        {/* Introductory Message */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="px-3 my-3 text-justify sm:text-center"
        >
          <p className={`${styles.paragraph}`}>
            Welcome to my virtual home on the internet. I'm delighted to have
            you here and I want to extend my heartfelt thanks for taking the
            time to explore what I've built.
          </p>

          <p className={`${styles.paragraph} `}>
            If you have any questions or feedback or simply to connect, don't
            hesitate to reach out by clicking the button below.
          </p>
        </motion.div>

        {/* Pointing Animation from Lottie */}
        <Lottie
          className="w-[100px] aspect-[16/9]"
          animationData={pointingAnimation}
          aria-describedby="Hand pointing towards the reach-out button"
        />

        {/* Reach out Button */}
        <a
          href="mailto: chanmyaeaung@my.jcu.edu.au"
          style={{ marginTop: "0" }}
          className={` ${styles.cursorTransition} primary__button hover:text-[#c86800] hover:bg-white focus-visible::bg-white focus-visible:text-[#c86800]`}
          target="_blank"
        >
          Reach out
        </a>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className={`flex tracking-wider flex-col px-3 items-start w-full max-w-[600px] mx-auto justify-start gap-6 xs:gap-0 xs:flex-row xs:items-center xs:justify-between mt-16 mb-8`}
        >
          <NavLink
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            to={`aboutme`}
            className={`border-black ${styles.flexCenter} gap-2 text-black shadow-shadow_btn bg-btn_green py-1 px-6 underline-offset-8  duration-200 hover:text-white`}
          >
            Learn more about me <SendOutlinedIcon />
          </NavLink>

          <NavLink
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            to={`projects`}
            className={`border-black ${styles.flexCenter} gap-2 text-black shadow-shadow_btn bg-btn_green py-1 px-6 underline-offset-8  duration-200 hover:text-white`}
          >
            Explore my projects <SendOutlinedIcon />
          </NavLink>
        </motion.div>
      </>
    );
  }

  return (
    <article
      id="Introduction"
      aria-label="Introductory Hero Section"
      className={`${styles.paddingX}`}
    >
      {renderHeroHeader()}

      <section className="flex flex-col items-center justify-center gap-3 border-none">
        {renderHeroBody()}
      </section>
    </article>
  );
};

export default Hero;
