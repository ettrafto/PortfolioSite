import React from 'react';
import { motion, useIsPresent } from "framer-motion";

import UnderContsrtuction from '../components/contact/util/UnderConstruction';


const About = () => {
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
    
      <UnderContsrtuction/>

      <div className="about-page">
        <div className="about-page__headline">
          
        </div>
      </div>
    </>

  );
};

export default About;