import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn } from "../../animation";
import { NavLink } from "react-router-dom";

const Project = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  /* Rerender when the screen size changes */
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* Disable animation on small screens below 768px */
  const shouldAnimateY = screenWidth >= 768;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldAnimateY ? [-500, 500] : [0, 0]
  );

  return (
    <section className="overflow-hidden ">
      <div
        id="project__container"
        className="flex items-center justify-center w-full h-full overflow-hidden "
      >
        <div
          id="project__wrapper"
          className="max-w-[1366px] flex-col sm:flex-row h-full m-auto flex items-center justify-center gap-12"
        >
          {/* Image Container */}
          <motion.figure
            id="project__img_container"
            ref={ref}
            className="sm:flex-1 w-full max-h-[280px] sm:max-h-auto sm:h-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-contain w-full h-full sm:object-cover"
            />
          </motion.figure>

          {/* Text Container */}
          <motion.div
            id="project__text_container"
            style={{ y }}
            className="flex flex-col items-center gap-3 p-3 text-center sm:flex-1 sm:text-start sm:items-start sm:gap-7"
          >
            <h2 className="text-2xl sm:text-6xl">{item.title}</h2>
            <p className="text-sm text-gray-400 sm:text-xl">
              {item.description}
            </p>
            <div className="flex gap-3 transition-all md:text-2xl">
              <NavLink
                to={item.sourceCodeLink}
                target="_blank"
                className="px-2 py-1 mr-2 bg-orange-300 border-none rounded-md cursor-pointer md:p-3 sm:px-2 sm:py-2 hover:text-slate-900"
              >
                Source Code
              </NavLink>
              <NavLink
                to={item.demoLink}
                target="_blank"
                className="px-2 py-1 ml-2 bg-orange-300 border-none rounded-md cursor-pointer md:p-3 sm:px-2 sm:py-2 hover:text-slate-900"
              >
                Live Demo
              </NavLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Project;
