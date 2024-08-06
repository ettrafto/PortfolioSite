import { motion } from "framer-motion";

import tempThumbnail from '../../images/temp.JPG';

import './DetailView.css';


const projects = [
    {
      id: "1",
      title: "Project One",
      description: "A brief description of Project One. This project involves creating a dynamic website using modern web technologies.",
      thumbnail: tempThumbnail,
      skills: ["JavaScript", "React", "CSS", "Framer Motion"],
      liveLink: "https://live-project-one.com",
      gitLink: "https://github.com/username/project-one",
      date: "2023-07-01",
      iconImg: "https://link-to-icon-image.com/icon1"
    },
    {
      id: "2",
      title: "Project Two",
      description: "An overview of Project Two. This project focuses on developing a mobile application with cross-platform capabilities.",
      thumbnail: tempThumbnail,
      skills: ["Kotlin", "Swift", "React Native"],
      liveLink: "https://live-project-two.com",
      gitLink: "https://github.com/username/project-two",
      date: "2023-05-15",
      iconImg: "https://link-to-icon-image.com/icon2"
    },
    // Add more projects as needed
  ];

function DetailView({ selected, onClose }) {
    const project = projects.find((p) => p.id === selected);

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
                style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0, 0, 0, 0.8)", zIndex:"2" }}
            />


                {/*backgroundImage: `url(${project.imageUrl})`*/}
            <motion.div
                className="detail-view"
                layoutId={selected}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                    position:"fixed",
                    top: "15%",
                    left: "15%",
                    transform: "translate(-50%, -50%)",
                    width: "70%",
                    height: "70%",    
                    background: "white", 
                    borderRadius: "1.8em", 
                    zIndex: "3" }}
                onTap={onClose}
            >
            <h2 className="detail-title">{project.title}</h2>

            <div className="detail-parent">
                <img className="detail-img" src={project.thumbnail}/>
                <div className="detail-container">
                    <p className="detail-description">{project.description}</p>
                    {/* SKILLS TODO */}
                    <a href="google.com" target="_blank" rel="noopener noreferrer">View Project</a>


                </div>
                
            </div>
            </motion.div>
        </>
    );
}

export default DetailView;