import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import image1 from '../assets/image-product-1.jpg';
import image2 from '../assets/image-product-2.jpg';
import image3 from '../assets/image-product-3.jpg';
import image4 from '../assets/image-product-4.jpg';

const images = [image1, image2, image3, image4];

const Thumbnail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = () => {
    setIsImageClicked(true);
    setIsCarouselVisible(true); // Show the carousel when image is clicked
  };



  const handleCloseButtonClick = () => {
    setIsImageClicked(false);
    setIsCarouselVisible(false); // Hide the carousel when close button is clicked
  };

  return (
    <div className="thumbnail-container md:ml-[1rem]">
      <motion.img
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt="thumbnail"
        className={`lg:h-[490px] lg:w-[500px] md:h-[400px] w-[400px] mb-[3rem] lg:rounded-xl cursor-pointer`}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        onClick={handleImageClick}
      />

      <div className="thumbnail-list flex justify-center mt-4">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="thumbnail"
            className={`thumbnail rounded-lg h-[100px] w-[100px] ${
              index === currentImageIndex ? 'selected' : ''
            }`}
            onClick={() => setCurrentImageIndex(index)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {isImageClicked && isCarouselVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button text-[2rem] cd  text-White " onClick={handleCloseButtonClick}>
              X
            </button>
            <ImageCarousel images={images} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
