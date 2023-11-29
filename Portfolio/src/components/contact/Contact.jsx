import React from "react";
import styles from "../../style";
import Lottie from "lottie-react";
import envelopeAnimation from "../../assets/animations/Contact_Animation.json";

/* Motion */
import { motion } from "framer-motion";
import { fadeIn } from "../../animation";

const Contact = () => {
  return (
    <div className={`px-3 ease-in-out duration-1000 h-full`} id="contact">
      <section className="flex flex-col items-center justify-center">
        {/* Primary Heading */}
        <h2 className={`primary__heading text-center`}>Contact</h2>
        {/* Horizontal Divier */}
        <div id="horizontal__divider" className="primary__dividerBg" />
      </section>

      <section className={`${styles.flexCenter} flex-col`}>
        {/* Paragraph */}
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          className={`${styles.paragraph} max-w-[470px] text-center mb-5`}
        >
          Thank you for visiting my{" "}
          <strong className="text-indigo-600">portfolio</strong>. I'm excited
          about the prospect of contribution my skills and passion as{" "}
          <strong className="text-indigo-600">a front-end developer</strong>. If
          you have any job opportunities, projects, or collaboration that align
          with my expertise, I'd love to hear from you. Feel free to get in
          touch using the button below. I'm looking forward to the possibility
          of joining your team and making a positive impact.
        </motion.p>

        {/* Reach out button */}
        <a
          target="_blank"
          href="mailto: chanmyaeaung@my.jcu.edu.au"
          rel="noreferrer"
          className={`${styles.cursorTransition} primary__button hover:text-[#c86800] hover:bg-white`}
        >
          Reach out
        </a>
      </section>
    </div>
  );
};

export default Contact;
