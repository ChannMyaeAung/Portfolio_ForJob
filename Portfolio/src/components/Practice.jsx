import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { skillsData } from "../data";
const Practice = () => {
  const fadeInAnimations = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
      },
    }),
  };

  return (
    <section className="px-3 py-3 bg-white">
      {/* Primary Heading */}
      <h2 className={`primary__heading text-center `}>Practice</h2>
      {/* Horizontal Divier */}
      <div id="horizontal__divider" className="primary__dividerBg" />

      <article className={`text-black ${styles.flexCenter} flex-col gap-5`}>
        <h2 className="text-[24px] font-medium ">My Skills</h2>

        <ul className={`${styles.flexCenter} max-w-[600px] flex-wrap gap-3`}>
          {skillsData.map((skillData, index) => (
            <motion.li
              key={skillData.id}
              variants={fadeInAnimations}
              initial="initial"
              whileInView="animate"
              custom={index}
              className="px-4 py-2 border rounded-md shadow-sm"
            >
              {skillData.skill}
            </motion.li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Practice;
