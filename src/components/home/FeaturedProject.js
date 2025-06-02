// FeaturedProject.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import projects from "../work/ProjectData/projects.js";
import "./FeaturedProject.css";
import DetailView from "../work/DetailView.js";
import "../work/DetailView.css"; // Ensure this is imported for styles

const FeaturedProject = () => {
  // 1. Grab only the projects marked as featured
  const featuredProjects = projects.filter((p) => p.FeaturedProject === true);

  // 2. Keep track of which project (by id) is currently “open” in the DetailView
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="featured-projects-section">
        {featuredProjects.map((project) => (
          <motion.div
            className="f-project-wrapper"
            key={project.id}
            // 3. When the user clicks this card, set it as “selected”
            onClick={() => setSelected(project.id)}
          >
            {/* 
              4. If you want a shared-layout animation between the thumbnail 
                 and the DetailView, wrap the image (or a container) in a motion element 
                 with layoutId matching project.id. 
                 
                 ↳ In DetailView, the outer <motion.div layoutId={selected} /> will match this.
            */}
            <div className="f-project-thumbnail">
              <motion.img
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                layoutId={project.id}
                style={{ width: "100%", height: "auto", borderRadius: "15px", objectFit: "cover" }}
              />
            </div>

            <div className="f-project-content-container">
              <div className="f-project-title">{project.title}</div>
              <div className="f-project-short-description">
                {project.shortDescription}
              </div>
              <div className="f-project-skill-container">
                {project.skills.map((skill, idx) => (
                  <div className="skill-pill" key={idx}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* “View All Projects” link stays the same */}
        <Link to="/work" className="f-project-link">
          View All Projects
        </Link>
      </div>

      {/* 5. AnimatePresence will mount/unmount the DetailView */}
      <AnimatePresence>
        {selected && (
          <DetailView
            selected={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FeaturedProject;
