import { HiOutlineExternalLink } from "react-icons/hi";
import profilePic from "../assets/bikramHero.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import React,{ forwardRef } from "react";

var container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = forwardRef((props,ref) => {
  return (
    <main ref={ref} className="border-b border-neutral-900 pb-4 lg:mb-35">
      <section className="flex flex-wrap-reverse lg:flex-nowrap lg:justify-between justify-center gap-4">
        <div>
          <section
            aria-live="polite"
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 lg:pb-16 text-5xl sm:text-6xl font-extralight sm:font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Bikram Bhusal
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web Developer | ML Enthusiast
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-4"
            >
              <a
                rel="noreferrer"
                href="https://drive.google.com/file/d/15BlXhJZeoLTYC-nUZ71dEtCR4-XEeYdb/view?usp=sharing"
                target="_blank"
                className="flex border mb-2 border-neutral-400 p-2 gap-2 rounded-lg hover:bg-cyan-400 hover:text-neutral-800 hover:border-cyan-400 hover:ease-in-out duration-200 delay-50 items-center justify-center font-tight tracking-tight"
              >
                <HiOutlineExternalLink /> My Resume
              </a>
            </motion.div>
          </section>
        </div>
        <div className="flex justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out ">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            className="lg:rounded-2xl rounded-full max-w-[16rem] sm:max-w-xs lg:max-w-md "
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={profilePic}
            alt="profilePic"
          />
        </div>
      </section>
    </main>
  );
});

export default Hero;
