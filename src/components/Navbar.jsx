import logo from "../assets/BikramLogo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
// import { useState } from "react";
const Navbar = () => {
  return (
    <>
      <nav className=""></nav>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <motion.a
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            href="/"
          >
            <img className="mx-2 w-28" src={logo} alt="logo" />
          </motion.a>
        </div>
        {/* <span className="flex justify-end text-sm">
          <Hamburger size={20} rounded={24} />
        </span> */}
        <div className="hidden md:flex m-8 items-center justify-center gap-4 text-2xl text-white">
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
    </>
  );
};

export default Navbar;
