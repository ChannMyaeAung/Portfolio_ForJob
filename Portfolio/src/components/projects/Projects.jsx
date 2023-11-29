import React, { useEffect, useRef, useState } from "react";
import styles from "../../style";
import Project from "./Project";
import { projectsData } from "../../data/projects";
import { motion, useScroll, useSpring } from "framer-motion";

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={`${styles.paddingX} relative `}>
      {/* Main Heading */}
      {/* Primary Heading */}
      <section className="flex flex-col items-center justify-center">
        {/* Primary Heading */}
        <h2 className={`primary__heading text-center`}>Projects</h2>
        {/* Horizontal Divier */}
        <div id="horizontal__divider" className="primary__dividerBg" />
      </section>

      <div
        id="progress"
        className="sticky top-16 left-0 py-1 pt-[calc(100vh-70px)] sm:pt-5 text-xl sm:text-4xl  text-center text-orange-300 md:pt-10"
      >
        <h3 className="mb-3 font-extrabold">Featured Works</h3>
        <motion.div
          id="progress__bar"
          style={{ scaleX }}
          className="h-3 bg-primary_orange bg-opacity-80"
        ></motion.div>
      </div>

      {projectsData.map((item, index) => (
        <Project key={item.title} item={item} />
      ))}
    </div>
    /* End of Project Component */
  );
};

const MemoizedProjects = React.memo(Projects);

export default MemoizedProjects;
