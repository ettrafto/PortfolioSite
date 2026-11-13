import { motion } from "framer-motion";

function CardRefactor({ id, projectName, projectThumbnail, setSelected }) {
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

export default CardRefactor;
