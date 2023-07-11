import {useState} from 'react';
import Navbar from '../components/Navbar';
import image1 from '../assets/image-product-1.jpg'

const MainScreen = () => {
  const cartItems = []; // Your cart items array
  const [itemqty,setItemQty]= useState(0); 

  const handleDecrementQty=()=>{ 
     if(itemqty>0){
      setItemQty((item)=> item-1); 
     }
  }

  const handleIncrementQty=()=>{ 
    setItemQty((item)=>item+1);
  }

  
  return (
    <>
    <div className='lg:mx-[10rem]'> 
      <Navbar cartItems={cartItems} />
      <div className='flex justify-center items-center lg:mt-[5.5rem] h-auto w-auto flex-col md:flex-row'>
        <div className='lg:mr-16  text-white'>
            <img src={image1} className='lg:h-[500px] lg:w-[500px] md:h-[360px] w-[390px] lg:rounded-xl'></img>         
        </div>
        <div className='lg:ml-16 md:mt-16  lg:mt-16 m-8'>
          <div className='flex flex-col'>
              <h3 className='tracking-widest text-[1.2rem]'>SNEAKER COMPANY</h3>
              <h1 className='lg:text-[3rem] font-bold lg:max-w-[500px] text-[2.2rem]'>Fall Limited Edition Sneakers</h1>
              <p className='max-w-[480px] py-4 text-[18px]'>These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div>
              <span className='text-[1.8rem] font-bold'>$125.00</span>
              <span className='bg-orange-200 text-orange-500 font-bold ml-4 relative bottom-[4px]'>50%</span> 
              {/* <span className='text-[1.2rem] ml-1'><del>$250</del></span> */}
            </div>
           

        
         <div className='flex sm:flex-row flex-col'>

         <div className="flex items-center justify-between rounded-lg m-2  lg:w-[40%] md:w-[40%] bg-gray-200  ">
              <button 
              onClick={handleDecrementQty}
               className=" text-[2rem] ml-4 font-thick  text-orange-500">-</button>
                        <span className="text-[1.1rem] ">{itemqty}</span>
              <button 
               onClick={handleIncrementQty} 
               className=" text-[1.6rem] font-thick  text-orange-500 mr-4">+</button>
                      </div>

         <button className='bg-orange-500 text-white lg:w-[60%] md:w-[60%]  m-2  py-4 sm:my-2 rounded-lg '><p className='font-bold'>Add to cart</p></button>
         </div>
          
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

//

export default MainScreen;
