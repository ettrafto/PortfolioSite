import React from 'react';
import { motion, useIsPresent } from "framer-motion";

import './Home.css';
import PerlinNoiseCircle from '../components/Profile/PerlinNoiseCircle';
import VennDiagram from '../components/home/VennDiagram';

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
      <div className="home-parent">
        <div className='home-container1'>
          <div className='name-container'>
            <h1 className='fname'>Evan</h1>
            <h1 className='lname'>Trafton</h1>
            <div className='details'>Developer & Designer</div>
          </div>

          <PerlinNoiseCircle className="profile"/>

        </div>


        <div className="home-container2">
          <div className="venn-diagram-container">
            <VennDiagram />
          </div>

          <div className="skills-container">
            <div className="home-skills-list">
              <div className="skills-list-section">
                <div className='skill-list-sub'>
                  <div className="skills-list-title">Languages</div>

                  <div className="skill">Python</div> 
                  <div className="skill">JavaScript</div>
                  <div className="skill">TypeScript</div>
                  <div className="skill">PHP</div>
                  <div className="skill">HTML</div>
                  <div className="skill">CSS</div>
                  <div className="skill">C++</div>
                  <div className="skill">Java</div>
                  <div className="skill">REST‑APIs</div>
                </div>
                
                <div className='skill-list-sub'>
                  <div className="skills-list-title">Professional</div>
                  <div className="skill">Agile</div>
                  <div className="skill">Scrum</div>
                  <div className="skill">Project Management</div>
                  <div className="skill">Roadmapping</div>
                  <div className="skill">User Research</div> 
                </div>

                <div className="skill-list-sub">
                  <div className="skills-list-title">Creative</div>
                  <div className="skill">Figma</div>
                  <div className="skill">Illustrator</div>
                  <div className="skill">After Effects</div>
                  <div className="skill">Photoshop</div>
                  <div className="skill">Lightroom</div>
                  <div className="skill">XD</div>
                </div>
              </div>


              <div className="skills-list-section">
                <div className="skill-list-sub2">

                <div className="skills-list-title">Frontend</div>
                <div className="skill">Node.js</div>
                <div className="skill">React</div>
                <div className="skill">Express</div>
                <div className="skill">Framer-Motion</div>

              </div>

                <div className="skill-list-sub2">

                <div className="skills-list-title">Backend</div>
                <div className="skill">SQL</div>
                <div className="skill">SQLite</div>
                <div className="skill">MySQL</div>
                <div className="skill">MongoDB</div>
                <div className="skill">Mongoose</div>
              </div>
              </div>




              
            </div>
          </div>
        </div>

        <div className='home-container3'>

          <div className='education-container'>
            <div className='education-details'>
              <div className='education-title'>
                <div className='school'>University of Vermont</div>
                <div className='class'>Class of 2025'</div>
              </div>
              <div className='degree'>B.S. Computer Science</div>
              <div className='minor'>Minor in Applied Design</div>

            </div>
            <div className='uvm-logo'>
              <img src='/images/logos/uvm-logo.png' alt="UVM Logo" className='uvm-logo-img'/>
            </div>

          </div>
        </div>

        <div className='home-container4'>
          <div className='projects-container' style={{border: '1px solid black'}}>
            <div className='projects-title'>Projects</div>

          </div>
        </div>

        <div className='home-container5'>
          <div className='misc-container' style={{border: '1px solid black'}}>
            <div>Misc</div>
          </div>
          <div className='contact-container' style={{border: '1px solid black'}}>
              <div className='contact-title'>Contact</div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Home;