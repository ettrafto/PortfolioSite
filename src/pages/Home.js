import React, {useState} from 'react';
import { motion, useIsPresent } from "framer-motion";

import './Home.css';
import PerlinNoiseCircle from '../components/Profile/PerlinNoiseCircle';
import VennDiagram from '../components/home/VennDiagram';
import Accordion from '../components/home/Accordian';
import FeaturedProject from '../components/home/FeaturedProject';
import QuoteCarousel from '../components/home/QuoteCarusel';


const Home = () => {
  const isPresent = useIsPresent();

  const [selectedProject, setSelectedProject] = useState(null);


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
                <Accordion title="Languages">
                  <div className="skill">Python</div>
                  <div className="skill">JavaScript</div>
                  <div className="skill">TypeScript</div>
                  <div className="skill">PHP</div>
                  <div className="skill">HTML</div>
                  <div className="skill">CSS</div>
                  <div className="skill">C++</div>
                  <div className="skill">Java</div>
                  <div className="skill">REST‑APIs</div>
                </Accordion>

                <Accordion title="Professional">
                  <div className="skill">Agile</div>
                  <div className="skill">Scrum</div>
                  <div className="skill">Project Management</div>
                  <div className="skill">Roadmapping</div>
                  <div className="skill">User Research</div>
                </Accordion>

                <Accordion title="Creative">
                  <div className="skill">Figma</div>
                  <div className="skill">Illustrator</div>
                  <div className="skill">After Effects</div>
                  <div className="skill">Premiere</div>
                  <div className="skill">Photoshop</div>
                  <div className="skill">Lightroom</div>
                  <div className="skill">XD</div>
                </Accordion>

                <Accordion title="Frontend">
                  <div className="skill">Node.js</div>
                  <div className="skill">React</div>
                  <div className="skill">Express</div>
                  <div className="skill">Framer-Motion</div>
                </Accordion>

                <Accordion title="Backend">
                  <div className="skill">SQL</div>
                  <div className="skill">SQLite</div>
                  <div className="skill">MySQL</div>
                  <div className="skill">MongoDB</div>
                  <div className="skill">Mongoose</div>
                </Accordion>
            </div>
          </div>

        </div>
        <div className='home-container5'>
            <div className='reco-title'>Testamonials</div>
          
          <div className='recos-container' >
            <QuoteCarousel />

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
          <div className='projects-container' >
            <div className='projects-title'>Featured Projects</div>
            <div className="featured-project-container"> 
              <FeaturedProject />
            </div>
            

          </div>
        </div>



      </div>
    </>
  );
};

export default Home;