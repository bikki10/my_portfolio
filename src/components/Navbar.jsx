import logo from "../assets/BikramLogo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <img className="mx-2 w-28" src={logo} alt="logo" />
        </a>
      </div>
      {/* <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <a
          rel="noreferrer"
          href="https://drive.google.com/file/d/1wuVlKPeL2u-HoyUeEyfQeFCUHYI4-Eh3/view?usp=sharing"
          target="_blank"
          className="flex border-transparent p-2 rounded-tl-xl rounded-br-xl rounded hover:bg-cyan-400 hover:text-neutral-800 hover:border-cyan-400 hover:ease-in-out duration-200 delay-50 bg- items-center justify-center font-semibold text-normal lg:text-2xl tracking-tight"
        >
          My Resume📜
        </a>
      </motion.div> */}
      <div className="flex m-8 items-center justify-center gap-4 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/bikram-10-bhusal/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/bikki10" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/bikki75.bikram"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/_bikki10/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
