import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ImageCarousel";
import Thumbnail from "../components/Thumbnail";
import {ShoppingCartIcon} from '@heroicons/react/24/outline';

const MainScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [itemqty, setItemQty] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const handleDeleteItem = (itemIndex) => {
    // Remove the item from the cartItems array
    const updatedCartItems = cartItems.filter(
      (_, index) => index !== itemIndex
    );
    setCartItems(updatedCartItems);
  }; 

  const sneakerProduct = {
    name: "Fall Limited Edition Sneakers",
    company: "SNEAKER COMPANY",
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125,
    ogprice: 250,
    image: "/image-product-1-thumbnail.jpg",
    quantity: itemqty,
    totalPrice: itemqty * 125,
  };

  const handleDecrementQty = () => {
    if (itemqty > 1) {
      setItemQty((item) => item - 1);
    }
  };

  const AddToCart = () => {
    const newItem = {
      ...sneakerProduct,
      quantity: itemqty,
    };

    setCartItems([...cartItems, newItem]);
    setItemQty(1);
  };

  const handleIncrementQty = () => {
    setItemQty((item) => item + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Check initial screen size

    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <>
      <div className="lg:mx-[10rem]">
        <Navbar cartItems={cartItems} handleDeleteItem={handleDeleteItem} />
      
            {isMobile ? (
              <>
              <div className="flex justify-center items-center h-auto w-auto flex-col">
                <div className="text-white"></div>
                <ImageCarousel />
              </div>

              <div className="mx-auto ml-[1rem] text-left">
                     <div className="flex flex-col">
                      <h3 className="tracking-widest text-[1rem] my-2">
                        {sneakerProduct.company}
                      </h3>
                      <h1 className="font-bold  text-[1.96rem]">
                        {sneakerProduct.name}
                      </h1>
                      <p className="max-w-[480px] py-[0.8rem] text-[18px]">
                        {sneakerProduct.desc}
                      </p>
                     </div>

                     <div className="flex justify-between my-4 mb-6">
                      <div className="flex">
                        <span className="text-[1.4rem] ml-1 font-bold">
                          ${sneakerProduct.price}.00
                        </span>
                        <span className="bg-orange-200 text-orange-500 font-bold ml-3 flex justify-center items-center h-7 w-7 mt-1 text-[12px] px-1">
                          50%
                      </span>
                      </div>
                    <span className="mr-4 mt-1">
                      <del>${sneakerProduct.ogprice}.00</del>
                    </span>
                     </div>

                     <div className="flex flex-col mr-4">
                      <div className="flex items-center justify-between rounded-lg bg-gray-200 shadow shadow-drop-xl mb-2">
                        <button 
                        onClick={handleDecrementQty}
                        className="text-[2rem] font-thick text-orange-500 ml-4"
                        >
                          -
                        </button>
                        <span className="text-[1.1rem]">{itemqty}</span>
                        <button 
                        onClick={handleIncrementQty}
                        className="text-[1.6rem] font-thick text-orange-500 mr-4">
                          +
                        </button>
                      </div>

                      <button 
                      onClick={AddToCart}
                      className="bg-orange-500 text-white rounded-lg my-2 py-[0.85rem] shadow drop-shadow-xl">
                       <p className="font-bold">Add to cart</p>
                      </button>
                     </div>
                </div>
               
              </>
            ) : (
              <>
              <div className="flex justify-center items-center mt-[4rem] h-auto w-auto flex-row">
                <div className="mr-14 ">
                <Thumbnail />
                </div>
                <div className="ml-16 mb-16 m-6 ">
                  <div className="flex flex-col">
                    <h3 className="tracking-[0.3rem] font-bold  text-Orange">
                      {sneakerProduct.company}
                    </h3>
                    <h1 className="text-[3rem] font-bold text-Very_Dark_Blue lg:max-w-[500px]">
                      {sneakerProduct.name}
                    </h1>
                    <p className="max-w-[480px] py-4 text-[18px] text-Dark_Grayish_Blue ">
                      {sneakerProduct.desc}
                    </p>
                    <div className="mb-2"> 
            <span className="ml-1 text-[1.8rem] text-Very_Dark_Blue font-bold">
              ${sneakerProduct.price}.00
            </span>
            <span className="bg-Pale_Orange text-Orange font-bold ml-4 relative bottom-[4px] p-1">
              50%
            </span>
            <br/>
           <span className="ml-2 text-[1.2rem] text-Grayish_Blue">
            <del>${sneakerProduct.ogprice}.00</del>
           </span>

           <div className="flex flex-row">
            <div className="flex items-center justify-between rounded-lg m-2 w-[40%] bg-gray-200 shadow drop-shadow-xl">
              <button 
              onClick={handleDecrementQty}
              className="text-[2rem] ml-4 font-thick text-Orange">
                -
              </button>
              <span className="text-[1.1ren]">{itemqty}</span>
              <button 
              onClick={handleIncrementQty}
              className="text-[1.6rem] font-thick text-orang-500 mr-4 text-Orange">
                +
              </button>
            </div>

            <button className="bg-orange-500 text-white w-[60%] m-2 py-4 rounded-lg shadow drop-shadow-xl"
            onClick={AddToCart}>
              <p className="font-bold text-[16px]">  Add to cart</p>
            </button>
           </div>
           </div>
                  </div>
                </div>

         

                
              </div>
             
              
              </>
            )}
          </div>
          
    </>
  );
};

export default MainScreen;
