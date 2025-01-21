import logo from "../assets/BikramLogo.png";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { forwardRef } from "react";

const headers = [
  { title: "Home", ref: "hero" },
  { title: "About", ref: "about" },
  { title: "Experience", ref: "experience" },
  { title: "Projects", ref: "projects" },
  { title: "Contact", ref: "contact" },
];

const Navbar = forwardRef(({ scrollToSection }, ref) => {
  return (
    <>
      <nav
        ref={ref}
        className="mb-20 flex items-center justify-between gap-6 pt-3 pb-6"
      >
        <div className="flex flex-shrink-0 items-center">
          <motion.a
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.15 }}
            href="/"
          >
            <img className="mx-2 w-28" src={logo} alt="logo" />
          </motion.a>
        </div>

        {/* Navigation Links */}
        <section className="hidden md:flex md:gap-2 lg:gap-4">
          {headers.map((item) => (
            <button
              key={item.ref}
              onClick={() => scrollToSection(item.ref)}
              className="px-4 py-2 rounded-2xl bg-gradient-to-b from-indigo-900 to-indigo-600 hover:from-indigo-700 hover:to-indigo-500 transform hover:scale-105 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[35%] before:bottom-3 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[35%] after:bottom-3 after:right-[50%]"
            >
              {item.title}
            </button>
          ))}
        </section>

        {/* Mobile Menu */}
        <span className="md:hidden">
          <Hamburger size={20} rounded={24} />
        </span>

        {/* Social Media Icons */}
        <div className="hidden md:flex m-8 items-center justify-center md:gap-2 lg:gap-4 text-2xl text-white">
          <a
            className="hover:scale-110 transition-transform duration-200 ease-in-out"
            href="https://www.linkedin.com/in/bikram-10-bhusal/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:scale-110 transition-transform duration-200 ease-in-out"
            href="https://github.com/bikki10"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-110 transition-transform duration-200 ease-in-out"
            href="https://www.instagram.com/_bikki10/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </>
  );
});

export default Navbar;
