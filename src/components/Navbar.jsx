import React, { useState } from 'react';
import { Bars3Icon, ShoppingCartIcon,TrashIcon} from '@heroicons/react/24/outline';
import { motion,AnimatePresence } from 'framer-motion';
import avatar from '../assets/image-avatar.png'





function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = ({cartItems, handleDeleteItem}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCartDetails ,setShowCartDetails]=useState(false); 
  const [navigation, setNavigation]= useState([
  { name: 'Collections', href: '#', current: false },
  { name: 'Men', href: '#', current: false },
  { name: 'Women', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  {name:'Contact' , href:'#' , current:false},
]);
  

  const handleDelete = (itemIndex) => {
    // Invoke the handleDeleteItem function passed from the parent component
    handleDeleteItem(itemIndex);
  };

  const handleNavigationClick = (index) => {
    const updatedNavigation = [...navigation];
    
    updatedNavigation.forEach((item, i) => {
      item.current = i === index;
    });
    
    setNavigation(updatedNavigation);
  };
  
  

  const handleShowNavbar=()=> { 
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return ( 
    <>
     {isMobileMenuOpen && <div className="overlay"></div> }
    <nav className="">
      <div className="lg:pt-4 lg:pb-6 px-2 sm:px-6 border-b border-gray-300 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={handleShowNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {window.innerWidth<='364px' ? (<>  <h1 className='sm:m-0 mb-[0.1rem] mr-[8rem] font-bold text-[32px] tracking-normal'>sneakers</h1></>) : (<>  <h1 className='sm:m-0 mb-[0.1rem] mr-[8rem] font-bold text-[32px] tracking-normal'>sneakers</h1></>) }
        
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item,index) => (
                  <a
                   onClick={()=> handleNavigationClick(index)}
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'mt-2  border-b-4 border-orange-500' : 'text-Dark_Grayish_Blue mt-[0.6rem]',
                      'rounded-md px-3 py-2 text-sm font-medium hover:text-black'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
  type="button"
  className="p-1 text-gray-400 lg:mr-4 focus:ring rounded-full"
  onClick={() => setShowCartDetails(!showCartDetails)}
>
  <span className="sr-only">View notifications</span>
  <ShoppingCartIcon className="h-7 w-7" aria-hidden="true" />
  {cartItems.length > 0 && (
    <span className="absolute bottom-8 px-2 py-1 text-xs font-semibold text-white bg-orange-500 h-6 w-6 rounded-full">
      {cartItems.length}
    </span>
  )}
</button>

            {/* Profile dropdown */}
        <div   className="ml-3 cursor-pointer">
  <div className="relative ml-3 cursor-pointer" 
>
    <span className="sr-only ">Open user menu</span>
    <img
    onClick={()=> setShowCartDetails(!showCartDetails)}
      className="lg:h-12 lg:w-12 h-8 w-8 rounded-full hover:ring-2 hover: ring-orange-500 focus:ring-2 focus:ring-orange-500"
      src={avatar}
      alt=""
    />
  </div>
 {showCartDetails ? (
 <>
{window.innerWidth<=640 ? ( 
<>
<div className='absolute top-[70px] left-[-200px] w-[300px]  z-40 h-auto origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none '>
<div className='flex justify-between'>
       <h2 className='p-4'>Cart</h2>
       <h1 onClick={()=> setShowCartDetails(false)} className='mr-6 mt-3 text-[1.2rem]'>X</h1>
       </div>
       <hr></hr>
    {cartItems.length===0 ? (
    <>
      <div className='h-[150px] flex justify-center items-center'>Your cart is empty</div>
    </>) : 
    (<>
     {cartItems.map((item, index) => (
         
         <div className='flex flex-col' key={index}>
           <div className='flex'>
             <div className='p-2'>
               <img className='h-20 w-20' src={item.image} alt='' />
             </div>
             <div className='p-2'>
               {item.name}
               <br />
               $<span className='text-[1rem]'>{item.price} x {item.quantity} = ${item.totalPrice}</span>
             </div>
             <TrashIcon
               className='p-2 h-10 w-10 mr-3 mt-2'
               onClick={() => handleDeleteItem(index)}
             />
           </div>
         </div>
       ))}
<button className='bg-orange-500 text-white py-4  m-2 w-[95%] rounded-lg'>Checkout</button>
    </>)}
</div>
</>) : (
<>
<div className="absolute right-0 z-10 mt-2 w-[350px] h-auto origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
   <div className='flex justify-between'>
       <h2 className='p-4'>Cart</h2>
       <h1 onClick={()=> setShowCartDetails(false)} className='mr-6 mt-3 text-[1.2rem]'>X</h1>
       </div>
       <hr></hr>
    {cartItems.length===0 ? (
    <>
      <div className='h-[150px] flex justify-center items-center'>Your cart is empty</div>
    </>) : 
    (<>
   
   {cartItems.map((item, index) => (
         
            <div className='flex flex-col' key={index}>
              <div className='flex'>
                <div className='p-2'>
                  <img className='h-20 w-20' src={item.image} alt='' />
                </div>
                <div className='p-2'>
                  {item.name}
                  <br />
                  $<span className='text-[1rem]'>{item.price} x {item.quantity} = ${item.totalPrice}</span>
                </div>
                <TrashIcon
                  className='p-2 h-10 w-10 mr-3 mt-2'
                  onClick={() => handleDeleteItem(index)}
                />
              </div>
            </div>
          ))}
  <button className='bg-orange-500 text-white py-4  m-2 w-[95%] rounded-lg'>Checkout</button>
   
    </>)}
  </div>
</>)}
 </>): (<></>)}
</div>

          </div>
        </div>
      </div>
      </nav>
 
      <AnimatePresence>
        {isMobileMenuOpen && (
        
          <motion.div
            className="absolute top-0 left-0 z-10 w-[62%] h-[100%]"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="sm:hidden bg-white h-screen">
              <button className="px-6 pt-4 pb-2" onClick={handleShowNavbar}>
                X
              </button>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-black' : 'text-black  hover:bg-Orange hover:text-white',
                    'block px-6 py-2 rounded-md text-base font-bold'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        
        )}
      </AnimatePresence>
    
      </>
  );
};

export default Navbar;
