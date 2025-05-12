import { motion } from "framer-motion";
import React, { useEffect } from "react";

import projects from './ProjectData/projects.js';
import './DetailView.css';
import ImgGallery from "./ImgGallery.js";

function DetailView({ selected, onClose }) {
    const project = projects.find((p) => p.id === selected);

    // Prevent background scrolling when DetailView is open
    useEffect(() => {
        document.body.classList.add("no-scroll");

        // Clean up by removing the class when component unmounts
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    if (!project) return null;

    return ( 
        <>
            <motion.div
                className="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.15 }}
                onTap={onClose}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.8)",
                    zIndex: "1000",
                }}
            />

            <motion.div
                className="detail-view"
                layoutId={selected}
                initial={{ opacity: 0, scale: 0.8, y: 50, borderRadius: "30px" }}
                animate={{ opacity: 1, scale: 1, y: 0, borderRadius: "30px" }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                    position: "fixed",
                    top: "15%",
                    left: "15%",
                    transform: "translate(-50%, -50%)",
                    width: "70%",
                    height: "80%",
                    overflowY: "auto",
                    background: "white",
                    borderRadius: "30px",
                    zIndex: "1001",
                }}
            >
                <div className="header-container">
                    <div className="header">
                        <h2 className="detail-title">{project.title}</h2>
                        <h3 className="detail-date">{project.date}</h3>
                    </div>

                    <div className="header-links">
                        {project.liveLink ? (
                            <a href={project.liveLink}>
                                <img src="icons/website.webp" alt="website-icon" />
                            </a>
                        ) : (
                            <a>
                                <img src="/icons/website.webp" alt="Live Link Icon" className="icon-disabled" />
                            </a>
                        )}
                        <a href={project.gitLink}>
                            <img src="icons/github.webp" alt="github-icon" />
                        </a>
                    </div>
                </div>

                <div className="detail-parent">
                    <div className="detail-img-container">
                        <img className="detail-img" src={project.thumbnail} />
                    </div>
                    <div className="detail-container">
                        <p className="detail-description">
                            {project.description.split("\n").map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>

                        <div className="skills-container">
                            <ul className="skills-list">
                                {project.skills.map((skill, index) => (
                                    <li key={index} className="skill-item">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <ImgGallery images={project.images} />
            </motion.div>
        </>
    );
}

export default DetailView;
