import React from "react";

interface ImageGalleryProps {
  image: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ image }) => {
  return (
    <>
        <a href={`/img/${image}`} className="glightbox" data-gallery="image-gallery">
            <img 
              className="h-auto max-w-full rounded shadow-lg hover:scale-105 transition duration-300 brightness-75 hover:brightness-100" 
              src={`/img/${image}`} 
              alt="Gallery" 
            />
        </a>
    </>
  );
};

export default ImageGallery;