import React from 'react';
import { motion, useIsPresent } from "framer-motion";

import UnderContsrtuction from '../components/contact/util/UnderConstruction';
import './About.css';


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
    
      {/*<UnderContsrtuction/>*/}

      <div className="about-page">
        <div className="about-page-container container1">
          <div className="about-page-text text1">
            <div className="about-page-title">My name is Evan and I'm a </div>
            <div className="about-page-job">Developer</div>
            <div className="about-page-job">&</div>
            <div className="about-page-job">Designer</div>     
          </div>
          <div className='about-page-image-container'>
            <img className='about-page-image' src='/images/about-me/hawaiiPic.webp' alt="Evan in front of a buddist temple in Hawaii" />
          </div>
        </div>

        <div className="about-page-container container2">
            <div className='about-page-image-container'>
              <img className='about-page-image' src='../images/about-me/safari.webp' alt="Evan in front of a buddist temple in Hawaii" />
            </div>
          <div className='about-page-text text2'>
          I have a passion for the evolving relationship between humans and technology. My goal is to help steer the future of tech toward healthier, more human-centered outcomes.
          </div>
        </div>

        <div className="about-page-container container3">
          <div className="about-page-text text3">
            As both a developer and a designer, I thrive at the intersection of technical precision and creative thinking. I love building intuitive, impactful tools that solve real-world problems. My favorite projects are where I can combine thoughtful architecture with user-first design.
            
          </div>
          <div className='about-page-image-container'>
              <img className='about-page-image' src='/images/about-me/sailingPic.webp' alt="Evan in front of a buddist temple in Hawaii" />
          </div>
        </div>

        <div className="about-page-container container4">
          <div className='about-page-image-container'>
              <img className='about-page-image' src='/images/about-me/barcelonaPic.webp' alt="Evan in front of a buddist temple in Hawaii" />
          </div>
          <div className="about-page-text text4">
            <div className='sub-title'>Interests</div>
            <ul>
              <li>User Interface Design</li>
              <li>System Design</li>
              <li>Human-Computer Interaction</li>
              <li>Data Visualization</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>



        <div className="about-page-container container5">
        <div className="about-page-text text5">
          <div className='sub-title'>Hobbies</div>
            <ul>
              <li>Hiking and Backpacking</li>
              <li>Martial Arts</li>
              <li>Snowboarding</li>
              <li>Sailing</li>
              <li>Photography</li>
              <li>Philosophy</li>
            </ul>

          </div>
          <div className='about-page-image-container'>
              <img className='about-page-image' src='/images/about-me/mtMadison.webp' alt="Evan in front of a buddist temple in Hawaii" />
          </div>

        </div>


          {/*<div className="about-page-container container6">
            
          <div className='about-page-image-container'>
              <img className='about-page-image' src='/images/about-me/barcelonaPic.webp' alt="Evan in front of a buddist temple in Hawaii" />
            </div>  
            <div className="about-page-text text6">
              <div>Interests </div>
                <ul>
                  <li>user interface design</li>
                  <li>system design</li>
                  <li>human-computer interaction</li>
                  <li>data visualization</li>
                  <li>project management</li>
              </ul>
            </div>
            
          </div>}*/}
      </div>
    </>

  );
};

export default About;