import React, { forwardRef } from "react";
import aboutImage from "../assets/about.jpg";
import {
  ABOUT_TEXT_1,
  ABOUT_TEXT_2,
  ABOUT_TEXT_3,
  ABOUT_TEXT_4,
} from "../constants";
import { motion } from "framer-motion";

var container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const About = forwardRef((props, ref) => {
  return (
    <main ref={ref} className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-10 lg:my-20 text-center text-4xl"
      >
        About
        <span className="text-neutral-400"> Me</span>
      </motion.h1>

      <section className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.75 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center items-center">
            <img className="rounded-2xl" src={aboutImage} alt="About" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.75 }}
          className="w-full lg:w-1/2"
        >
          <section
            aria-live="polite"
            className="flex flex-col items-center justify-center lg:justify-start"
          >
            <motion.p
              initial="hidden"
              animate="visible"
              variants={container(0)}
              className="my-2 max-w-xl mt-4 md:mt-0 py-2 md:py-3 tracking-tighter leading-relaxed"
            >
              {ABOUT_TEXT_1}
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={container(0.5)}
              className="my-2 max-w-xl py-1 md:py-3 tracking-tighter leading-relaxed"
            >
              {ABOUT_TEXT_2}
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={container(1)}
              className="my-2 max-w-xl py-1 md:py-3 tracking-tighter leading-relaxed"
            >
              {ABOUT_TEXT_3}
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={container(1.5)}
              className="my-2 md:text-start max-w-xl py-3 tracking-tighter leading-relaxed"
            >
              {ABOUT_TEXT_4}
            </motion.p>
          </section>
        </motion.div>
      </section>
    </main>
  );
});

export default About;
