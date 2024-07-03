import React from 'react';
import { motion } from "framer-motion";

import './Home.css';
import PerlinNoiseCircle from '../components/Profile/PerlinNoiseCircle';

const Home = () => {

  return (
    <>
      <div className='home-container1'>
        <div className='name-container'>
          <h1 className='name'>Evan</h1>
          <h1 className='name'>Trafton</h1>
          <div className='details'>Lorem Ipsum</div>
        </div>

        <PerlinNoiseCircle className="profile"/>

      </div>
      <div className='home-container2'>
        <div className='venn-diagram-container'></div>
        <div className='interests-container'>interests</div>


      </div>
    </>
  );
};

export default Home;