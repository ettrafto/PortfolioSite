import React, {useState} from 'react';
import { motion, useIsPresent, AnimatePresence } from "framer-motion";

import DetailView from '../components/work/DetailView';
import Thumbnail from '../components/work/Thumbnail';
import CardRefector from '../components/work/CardRefactor';


import "./Work.css";

import projects from '../components/work/ProjectData/projects.js';

const Work = () => {
  const isPresent = useIsPresent();
  const [selected, setSelected] = useState(null);

  const [view, setView] = useState("tech"); // 'tech' or 'creative'
  const filteredProjects = projects.filter(p => (view === "tech" ? p.isTech : !p.isTech));

  return (
    <>
      <div className=''></div>
       <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />

  {/* Toggle Button */}

      <div className="toggle-switch-wrapper">
        <div className="toggle-switch" onClick={() => setView(view === "tech" ? "creative" : "tech")}>
          <div className={`toggle-indicator ${view === "tech" ? "left" : "right"}`} />
          <span className={view === "tech" ? "active" : ""}>Technical</span>
          <span className={view === "creative" ? "active" : ""}>Creative</span>
        </div>
      </div>


      {/* Project Thumbnails */}
      <div className="card-container">
        {filteredProjects.map((project) => (
          <Thumbnail
            className="card"
            key={project.id}
            id={project.id}
            projectThumbnail={project.thumbnail}
            projectName={project.title}
            imageUrl={project.thumbnail}
            setSelected={setSelected}
          />
        ))}
      </div>

        <AnimatePresence>
            {selected && <DetailView selected={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>
    </>
);
}
 

export default Work;