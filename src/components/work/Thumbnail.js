import { motion } from "framer-motion";
import './Thumbnail.css'; 

function Thumbnail({ id, projectName, projectThumbnail, shortDescription, setSelected }) {
    return (
        <>
            <motion.div
                className="thumbnail  thumbnail-container"
                initial={false} 

                layoutId={`work-${id}`}
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
