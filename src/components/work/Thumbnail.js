import { motion } from "framer-motion";
import { useEffect } from "react";
// Import the static image
import tempThumbnail from './ProjectData/images/temp.JPG';

function Thumbnail({ id, projectName, projectThumbnail, setSelected }) {
    useEffect(() => {
        const img = new Image();
        img.src = tempThumbnail; // Preload the bigger version
    }, []);

    return (
        <motion.div
            className="thumbnail"
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
            <div className="card-title">{projectName}</div>
        </motion.div>
    );
}

export default Thumbnail;
