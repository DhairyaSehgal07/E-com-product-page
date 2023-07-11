import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ImageCarousel from '../components/ImageCarousel';
import image1 from '../assets/image-product-1.jpg';
import Thumbnail from '../components/Thumbnail';

const MainScreen = () => {
  const cartItems = []; // Your cart items array
  const [itemqty, setItemQty] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleDecrementQty = () => {
    if (itemqty > 0) {
      setItemQty((item) => item - 1);
    }
  };

 

  const handleIncrementQty = () => {
    setItemQty((item) => item + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Check initial screen size

    window.addEventListener('resize', handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <>
      <div className="lg:mx-[10rem]">
        <Navbar cartItems={cartItems} />
        <div className="flex justify-center items-center lg:mt-[4rem] h-auto w-auto flex-col md:flex-row">
          <div className="lg:mr-14  text-white">
            {isMobile ? (
              <>
                <ImageCarousel />
              </>
            ) : (
              <>
              <Thumbnail/>
                {/* <img
                  src={image1}
                  className="lg:h-[450px] lg:w-[450px] md:h-[360px] w-[390px] lg:rounded-xl"
                  alt="Product"
                /> */}
              </>
            )}
          </div>
          <div className="lg:ml-16 lg:mb-16 ">
            <div className="flex flex-col">
              <h3 className="tracking-widest text-[1.2rem]">SNEAKER COMPANY</h3>
              <h1 className="lg:text-[3rem] font-bold lg:max-w-[500px] text-[2.2rem]">
                Fall Limited Edition Sneakers
              </h1>
              <p className="max-w-[480px] py-4 text-[18px]">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they'll withstand everything the weather can offer.
              </p>
              <div className='mb-2'>
                <span className="text-[1.8rem] font-bold">$125.00</span>
                <span className="bg-orange-200 text-orange-500 font-bold ml-4 relative bottom-[4px] p-1">
                  50%
                </span>
                {isMobile ? (<>
                <span className='text-[1.2rem] ml-[8rem] '><del>$250</del></span>
                </>): (<>
                <br/>
                <span className='ml-2 text-[1.2rem]'><del>$250</del></span>
                </>)}
              </div>

              <div className="flex sm:flex-row flex-col">
                <div className="flex items-center justify-between rounded-lg m-2  lg:w-[40%] md:w-[40%] bg-gray-200  ">
                  <button
                    onClick={handleDecrementQty}
                    className="text-[2rem] ml-4 font-thick  text-orange-500"
                  >
                    -
                  </button>
                  <span className="text-[1.1rem] ">{itemqty}</span>
                  <button
                    onClick={handleIncrementQty}
                    className="text-[1.6rem] font-thick  text-orange-500 mr-4"
                  >
                    +
                  </button>
                </div>

                <button className="bg-orange-500 text-white lg:w-[60%] md:w-[60%]  m-2  py-4 sm:my-2 rounded-lg ">
                  <p className="font-bold">Add to cart</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
