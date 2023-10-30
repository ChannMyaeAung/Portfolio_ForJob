import React from "react";
import { projectsData } from "../../data/projects";
import styles from "../../style";

const Project = () => {
  return (
    <>
      {projectsData.map((project, index) => {
        const {
          title,
          technologies,
          description,
          sourceCodeLink,
          demoLink,
          image,
        } = project;

        return (
          //Projects
          <article
            className={`flex gap-10 mb-8 flex-col items-center w-full max-w-[1200px]  mx-auto ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
            id="projects"
            key={title}
          >
            {/* Image */}

            <figure>
              <img
                src={image}
                alt="project-image"
                className={`border-4 rounded-lg border-[#c86800]`}
              />
            </figure>

            {/* Project Descriptions */}
            <div
              className={`flex flex-col items-start justify-around gap-5 mb-5 primary__description ${
                index % 2 === 0
                  ? "primary__description_left"
                  : "primary__description_right"
              }`}
            >
              {/* List of technologies used */}
              <h1 className="grid justify-between grid-cols-2 gap-3 font-semibold gap-y-4 sm:flex place-items-start sm:gap-4">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-${tech.toLowerCase()} text-center z-[3]`}
                  >
                    {tech}
                  </span>
                ))}
              </h1>

              {/* Project Description */}
              <p className={`${styles.paragraph} z-[3]`}>{description}</p>

              {/* Source Code & Demo Link */}
              <div className="flex gap-5 z-[3]">
                <button
                  className={`${styles.cursorTransition} border px-3 rounded-lg hover:bg-primary_green py-1 border-primary_green`}
                >
                  <a href={sourceCodeLink} target="_blank">
                    Source Code
                  </a>
                </button>
                <button
                  className={`${styles.cursorTransition} border px-3 rounded-lg hover:bg-pink-800 py-1 border-pink-800`}
                >
                  <a href={demoLink} target="_blank">
                    Demo Website
                  </a>
                </button>
              </div>
              {/* End of Source Code & Demo Link */}
            </div>
          </article>
        );
        //End of Project
      })}
    </>
  );
};
export default Project;
