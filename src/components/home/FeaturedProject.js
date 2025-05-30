import React from "react";
import projects from '../work/ProjectData/projects.js';
import './FeaturedProject.css';

const FeaturedProject = ({ onSelect }) => {
    const featuredProjects = projects.filter(p => p.FeaturedProject === true);

    return (
        <div className="featured-projects-section">

            {featuredProjects.map((project) => (
                <div
                    className="f-project-wrapper"
                    key={project.id}
                    onClick={() => onSelect && onSelect(project.id)}
                >
                    <div className="f-project-thumbnail">
                        <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
                    </div>

                    <div className="f-project-content-container">
                        <div className="f-project-title">{project.title}</div>
                        <div className="f-project-short-description">{project.shortDescription}</div>
                        <div className="f-project-skill-container">
                            {project.skills.map((skill, index) => (
                                <div className="skill-pill" key={index}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturedProject;
