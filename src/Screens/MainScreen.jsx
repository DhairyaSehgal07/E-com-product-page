import React from 'react';
import Navbar from '../components/Navbar';

const MainScreen = () => {
  const cartItems = ["kaanchu"]; // Your cart items array

  return (
    <>
      <Navbar cartItems={cartItems} />
    
    </>
  );
};

export default MainScreen;
