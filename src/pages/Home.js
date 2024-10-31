import React from 'react';
import { motion, useIsPresent } from "framer-motion";

import './Home.css';
import PerlinNoiseCircle from '../components/Profile/PerlinNoiseCircle';

const Home = () => {
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
      <div className='home-container1'>
        <div className='name-container'>
          <h1 className='fname'>Evan</h1>
          <h1 className='lname'>Trafton</h1>
          <div className='details'>Aspiring Full Stack Developer</div>
        </div>

        <PerlinNoiseCircle className="profile"/>

      </div>
      <div className='home-container2'>
        <div className='venn-diagram-container'>
          
        </div>
        <div className='interests-container'></div>

      </div>

    </>
  );
};

export default Home;