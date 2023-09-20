import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { skillsData } from "../data";
const Featured = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section className="px-3" id="featured">
      {/* Primary Heading */}
      <h2 className={`primary__heading text-center`}>Featured</h2>
      {/* Horizontal Divier */}
      <div id="horizontal__divider" className="primary__dividerBg" />

      <article>
        <header className="mb-3 text-2xl font-semibold text-center">
          My Skills
        </header>

        <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 max-w-[600px] mx-auto">
          {skillsData.map((skills, index) => (
            <motion.li
              key={skills.id}
              className="px-5 py-3 bg-white border border-black cursor-pointer rounded-xl"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skills.skill}
            </motion.li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Featured;
