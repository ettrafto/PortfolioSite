import React from 'react';
import { motion } from "framer-motion";

import Timeline from '../components/timeline/Timeline';

const Work = () => {

  const pageVariants = {
    initial: {
      opacity: 0,
      x: '100vw',
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: '100vw',
    },
  };
  
  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1.5,
  };

  return (
    <>
          <motion.div
        className="Work"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >  
    <div>
      <h1>Work</h1>
      {/* Add your work page content here */}
    </div>
    <Timeline />
    </motion.div>
    </>
  );
};

export default Work;