import logo from "../assets/BikramLogo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <img className="mx-2 w-28" src={logo} alt="logo" />
        </a>
      </div>
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
