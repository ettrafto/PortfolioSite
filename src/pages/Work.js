import React, {useState} from 'react';
import { motion, useIsPresent, AnimatePresence } from "framer-motion";

import DetailView from '../components/work/DetailView';
import Thumbnail from '../components/work/Thumbnail';

import tempPhoto from '../images/temp.JPG';

import "./Work.css";


const projects = [
  {
    id: "1",
    title: "Project One",
    description: "A brief description of Project One. This project involves creating a dynamic website using modern web technologies.",
    thumbnail: tempPhoto,
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
    thumbnail: tempPhoto,
    skills: ["Kotlin", "Swift", "React Native"],
    liveLink: "https://live-project-two.com",
    gitLink: "https://github.com/username/project-two",
    date: "2023-05-15",
    iconImg: "https://link-to-icon-image.com/icon2"
  },
  {
    id: "3",
    title: "Project Two",
    description: "An overview of Project Two. This project focuses on developing a mobile application with cross-platform capabilities.",
    thumbnail: tempPhoto,
    skills: ["Kotlin", "Swift", "React Native"],
    liveLink: "https://live-project-two.com",
    gitLink: "https://github.com/username/project-two",
    date: "2023-05-15",
    iconImg: "https://link-to-icon-image.com/icon2"
  },
  {
    id: "4",
    title: "Project Two",
    description: "An overview of Project Two. This project focuses on developing a mobile application with cross-platform capabilities.",
    thumbnail: tempPhoto,
    skills: ["Kotlin", "Swift", "React Native"],
    liveLink: "https://live-project-two.com",
    gitLink: "https://github.com/username/project-two",
    date: "2023-05-15",
    iconImg: "https://link-to-icon-image.com/icon2"
  },
  {
    id: "5",
    title: "Project Two",
    description: "An overview of Project Two. This project focuses on developing a mobile application with cross-platform capabilities.",
    thumbnail: tempPhoto,
    skills: ["Kotlin", "Swift", "React Native"],
    liveLink: "https://live-project-two.com",
    gitLink: "https://github.com/username/project-two",
    date: "2023-05-15",
    iconImg: "https://link-to-icon-image.com/icon2"
  },
  {
    id: "6",
    title: "Project Two",
    description: "An overview of Project Two. This project focuses on developing a mobile application with cross-platform capabilities.",
    thumbnail: tempPhoto,
    skills: ["Kotlin", "Swift", "React Native"],
    liveLink: "https://live-project-two.com",
    gitLink: "https://github.com/username/project-two",
    date: "2023-05-15",
    iconImg: "https://link-to-icon-image.com/icon2"
  },
  // Add more projects as needed
];

const Work = () => {
  const isPresent = useIsPresent();
  const [selected, setSelected] = useState(null);


  return (
    <>
       <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />


      <div className="card-container">
        {projects.map((project) => (
              <Thumbnail
                  className="card"
                  key={project.id}
                  id={project.id}
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