import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT_1 } from "../constants";
import { ABOUT_TEXT_2 } from "../constants";
import { ABOUT_TEXT_3 } from "../constants";
import { ABOUT_TEXT_4 } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <main className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>

      <section className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center items-center">
            <img className="rounded-2xl" src={aboutImage} alt="About" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          className="w-full lg:w-1/2"
        >
          <section
            aria-live="polite"
            className="flex flex-col items-center justify-center lg:justify-start"
          >
            <p className="my-2 max-w-xl py-6 tracking-tighter leading-relaxed">
              {ABOUT_TEXT_1}
            </p>
            <p className="my-2 max-w-xl py-6 tracking-tighter leading-relaxed">
              {ABOUT_TEXT_2}
            </p>
            <p className="my-2 max-w-xl py-6 tracking-tighter leading-relaxed">
              {ABOUT_TEXT_3}
            </p>
            <p className="my-2 md:text-start max-w-xl py-6 tracking-tighter leading-relaxed">
              {ABOUT_TEXT_4}
            </p>
          </section>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
