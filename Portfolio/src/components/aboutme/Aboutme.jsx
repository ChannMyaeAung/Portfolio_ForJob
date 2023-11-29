import React, { useEffect, useState } from "react";
import styles from "../../style";

import { motion } from "framer-motion";
import { aboutMe, aboutMeDetails } from "../../data/data";

import { fadeIn } from "../../animation";

const Aboutme = () => {
  return (
    <div id="aboutme" className={` w-full`}>
      <section className="flex flex-col items-center justify-center">
        {/* Primary Heading */}
        <h2 className={`primary__heading text-center`}>About Me</h2>
        {/* Horizontal Divier */}
        <div id="horizontal__divider" className="primary__dividerBg" />
      </section>

      {/* About me */}
      <article
        className={`w-full md:flex md:items-center md:justify-between md:gap-6`}
      >
        <div className={`${styles.flexCenter} flex-1 flex-col gap-10`}>
          {aboutMe.map((item, index) => {
            const {
              id,
              title,
              imgIcon,
              animation,
              description_1,
              description_2,
            } = item;
            return (
              <section
                key={id}
                className="flex flex-col items-center justify-center w-full"
              >
                <div
                  className={`w-full  flex md:gap-6 flex-col items-center justify-between  ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }  `}
                >
                  <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <h3 className={`${styles.heading2}`}>{title}</h3>
                    <p className={`${styles.paragraph}`}>{description_1}</p>
                    <br />
                    <p className={`${styles.paragraph}`}>{description_2}</p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.4 }}
                    className="w-[250px] xs:w-[280px] ss:w-[300px] mx-4 object-cover md:self-center"
                  >
                    {imgIcon && (
                      <img
                        src={imgIcon}
                        alt={title}
                        className="rounded-[5px] w-full mt-6"
                      />
                    )}
                    {animation && (
                      <span className="w-full aspect-[16/9]">{animation}</span>
                    )}
                  </motion.div>
                </div>
              </section>
            );
          })}
        </div>
      </article>
    </div>
  );
};
export default Aboutme;
