import React from "react";
import styles from "../style";
import projectsData from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Project from "./Project";

const Projects = () => {
  const options = {
    rootMargin: "250px",
    threshold: 0,
    triggerOnce: true,
  };

  const { ref, inView } = useInView(options);

  return (
    <motion.section
      ref={ref}
      className={`${
        inView
          ? "opacity-100 translate-y-0 delay-100 ease-in-out duration-500 "
          : "opacity-0 translate-y-[300px] delay-100 ease-in-out duration-500 "
      } ${styles.paddingX}`}
    >
      {/* Main Heading */}
      {/* Primary Heading */}
      <h2 className={`primary__heading text-center`}>Projects</h2>
      {/* Horizontal Divier */}
      <div id="horizontal__divider" className="primary__dividerBg" />

      <Project />
    </motion.section>
    /* End of Project Component */
  );
};

const MemoizedProjects = React.memo(Projects);

export default MemoizedProjects;
