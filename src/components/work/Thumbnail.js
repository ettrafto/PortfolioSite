import { motion } from "framer-motion";
import { useEffect } from "react";
// Import the static image
//import tempThumbnail from './ProjectData/images/temp.webp';
import './Thumbnail.css'; 

function Thumbnail({ id, projectName, projectThumbnail, shortDescription, setSelected }) {
    useEffect(() => {
        const img = new Image();
        //img.src = tempThumbnail; // Preload the bigger version
    }, []);

    return (
        <>
            <motion.div
                className="thumbnail  thumbnail-container"
                layoutId={id}
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${projectThumbnail})`,
                    borderRadius: "30px",
                    overflow: "hidden", // Ensure image respects the border-radius
                    cursor: "pointer"   // Add a pointer cursor for better UX
                }}
                onTap={() => setSelected(id)}
            >            
            <div className="thumbnail-overlay">
                <span className="short-description">
                {shortDescription}
                </span>
            </div>
                <div className="card-title">{projectName}</div>
            </motion.div>

    </>
    );
}

export default Thumbnail;
