// import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Experience
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 3, delay: 2 }}
        className="text-center text-sm tracking-tighter"
      >
        No Worries! After you and I work together, this section will also get
        filled. 😊
      </motion.p>
      {/* <div>{EXPERIENCES.map((experience, index)=>{
            
              <div
                key={index}
                className="mb-8 flex flex-wrap lg:justify-center"
              >
                <div className="w-full lg:1/4">
                  <p className="text-sm text-neutral-400 mb-2">
                    {experience.year}
                  </p>
                </div>
                <div className="w-full mx-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{experience.role}</h6>
                </div>
              </div>
        })}</div> */}
    </div>
  );
};

export default Experience;
