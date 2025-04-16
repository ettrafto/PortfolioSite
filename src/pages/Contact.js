import React from 'react';
import { motion, useIsPresent } from "framer-motion";
import ContactForm from '../components/contact/ContactForm';
import './Contact.css';


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
  
          <a href='https://github.com/ettrafto'>
              <img src='/icons/github.webp'/>
          </a>

          <a href='https://www.linkedin.com/in/evan-trafton'>
            <img src='/icons/linkedIn.webp'/>
          </a>

          <a href='/files/evan-trafton-resume.pdf' download>
            <img src='/icons/resume.webp'/>
          </a>

          <a href='https://www.youtube.com/@evantrafton9213'>
            <img src='/icons/youtube.webp'/>
          </a>
      </div>
    </>

  );
};

export default Contact;