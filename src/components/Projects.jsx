import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { PROJECTS } from "../constants";

import { motion } from "framer-motion";
import React,{ forwardRef } from "react";

const Projects = forwardRef((props,ref) => {
  return (
    <main ref={ref} className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-10 lg:my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  className="rounded mb-6"
                  alt={project.title}
                />
              </motion.div>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <span className="flex flex-wrap flex-grow">

                {project.technologies.map((tech, index) => {
                  return (
                    <span
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 my-1 lg:my-0"
                    key={index}
                    >
                      {tech}
                    </span>
                  );
                })}
                </span>
                <div className="flex">
                  <a href={project.gitLink} target="_blank" rel="noreferrer">
                    <AiOutlineGithub className="text-5xl pt-4" />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <AiOutlineLink className="text-5xl pt-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </main>
  );
});

export default Projects;
