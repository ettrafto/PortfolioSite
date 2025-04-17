import React from 'react';
import { motion, useIsPresent } from "framer-motion";

import ContactForm from '../components/contact/ContactForm';
import './Contact.css';

import resumePdf from "../assets/evan-trafton-resume.pdf";


const Contact = () => {
  const isPresent = useIsPresent();

  return (
    <>
      <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
    
      <div>
        <ContactForm />
      </div>
      <div className="contact-icons-container">
        <a
          href="https://github.com/ettrafto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/github.webp" alt="GitHub" />
        </a>

        <a
          href="https://www.linkedin.com/in/evan-trafton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/linkedIn.webp" alt="LinkedIn" />
        </a>

        <a
          href={resumePdf}
          download="Evan_Trafton_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/resume.webp" alt="Resume" />
        </a>

        <a
          href="https://www.youtube.com/@evantrafton9213"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/youtube.png" alt="YouTube" />
        </a>
      </div>
    </>

  );
};

export default Contact;