import React from "react";

const ImgGallery = ({images}) => {
    
    if (!Array.isArray(images) || images.length === 0) {
        return <p></p>; 
    }

    return (
        <div className="img-gallery">
        {images.map((img, index) => (
            <img className="one-gallery-img" key={index} src={img} alt={`Gallery image ${index + 1}`} />
        ))}
    </div>    );
}

export default ImgGallery;