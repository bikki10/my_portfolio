import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import React, { forwardRef } from "react";

const Contact = forwardRef((props,ref) => {
  const redirectToGmail = () => {
    const encodedEmail = encodeURIComponent(CONTACT.email);
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}`,
      "_blank"
    );
  };

  return (
    <main
      ref={ref}
      className="border-b border-neutral-900 pb-10 md:pb-12 lg:pb-16"
    >
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="tracking-tighter ">
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4 flex justify-center items-center gap-2"
        >
          <FaLocationDot />
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4 flex justify-center items-center gap-2"
        >
          <FaPhoneVolume />
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          href="#"
          target="_blank"
          className=" flex justify-center items-center gap-2 hover:underline underline-offset-4"
          onClick={redirectToGmail}
        >
          <IoMdMail />
          {CONTACT.email}
        </motion.a>
      </div>
    </main>
  );
});

export default Contact;
