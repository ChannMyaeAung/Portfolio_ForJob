import React, { useEffect, useState } from "react";
import styles from "../style";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { aboutMe, aboutMeDetails } from "../data";
import { style } from "@mui/system";

const Aboutme = () => {
  const options = {
    rootMargin: "50px",
    threshold: 0,
    triggerOnce: true,
  };

  const { ref, inView } = useInView(options);

  return (
    <motion.section
      id="aboutme"
      ref={ref}
      className={` ${
        inView
          ? "opacity-100 translate-y-0 ease-in-out delay-100 duration-1000"
          : "opacity-0 translate-y-[300px] ease-in-out delay-100 duration-1000"
      } w-full`}
    >
      {/* Primary Heading */}
      <h2 className={`primary__heading text-center`}>About Me</h2>
      {/* Horizontal Divier */}
      <div id="horizontal__divider" className="primary__dividerBg" />

      {/* About me */}
      <article
        className={`w-full md:flex md:items-center md:justify-center md:gap-6`}
      >
        <div
          className={`${styles.flexCenter} flex-col gap-10 ${styles.marginX}`}
        >
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
              <article key={id} className="w-full ">
                <div
                  className={`w-full flex md:gap-6 flex-col items-center  justify-center  ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }  `}
                >
                  <div className={`${styles.marginX}`}>
                    <h3 className={`${styles.heading2}`}>{title}</h3>
                    <p className={`${styles.paragraph}`}>{description_1}</p>
                    <br />
                    <p className={`${styles.paragraph}`}>{description_2}</p>
                  </div>
                  <div className="w-[250px] xs:w-[280px] ss:w-[300px] mx-4 object-cover md:self-center">
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
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </article>
    </motion.section>
  );
};
export default Aboutme;
