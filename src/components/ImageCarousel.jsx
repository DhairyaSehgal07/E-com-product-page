import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/image-product-1.jpg'
import image2 from '../assets/image-product-2.jpg'
import image3 from '../assets/image-product-3.jpg'
import image4 from '../assets/image-product-4.jpg'

const images=[image1, image2, image3, image4]; 


const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = event => {
    if (event.keyCode === 37) {
      // Left arrow key
      handlePrevImage();
    } else if (event.keyCode === 39) {
      // Right arrow key
      handleNextImage();
    }
  };

  return (
    <div
      className="carousel-container"
      tabIndex={0} // Add tabIndex to make the component focusable and listen to keyboard events
      onKeyDown={handleKeyDown}
    >
      <motion.img
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt="carousel"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      />

      <button className='bg-white text-black  text-[1.5rem] absolute   left-[1rem] top-[14rem] rounded-full h-12 w-12' onClick={handlePrevImage}>  &#60; </button>
      <button className='bg-white text-black text-[1.5rem] absolute top-[14rem] left-[20.3rem] rounded-full h-12 w-12' onClick={handleNextImage}> &#62;</button>
    </div>
  );
};

export default ImageCarousel;
