import { motion } from "framer-motion";
import { useEffect } from "react";
// Import the static image
import tempThumbnail from '../../images/temp.JPG';

function Thumbnail({ id, projectName, setSelected }) {
    useEffect(() => {
        const img = new Image();
        img.src = tempThumbnail; // Preload the bigger version
    }, []);

    return (
        <motion.div
            className="thumbnail"
            layoutId={id}
            style={{ backgroundSize:"cover", backgroundImage: `url(${tempThumbnail})`, borderRadius: "1.8rem", height: "20em", width: "25em" }}
            onTap={() => setSelected(id)}
        >
            <div className="card-title" >{projectName}</div>
        </motion.div>
    );
}

export default Thumbnail;
