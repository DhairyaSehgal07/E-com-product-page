import React, { useState } from 'react';
import { Bars3Icon, ShoppingCartIcon} from '@heroicons/react/24/outline';
import { motion,AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Collections', href: '#', current: false },
  { name: 'Men', href: '#', current: false },
  { name: 'Women', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  {name:'Contact' , href:'#' , current:false},
]; 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCartDetails ,setShowCartDetails]=useState(false); 
  

  const handleShowNavbar=()=> { 
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return ( 
    <>
     {isMobileMenuOpen && <div className="overlay"></div> }
    <nav className="">
      <div className="lg:mx-[10rem] lg:pt-4 lg:pb-6 px-2 sm:px-6 border-b border-gray-300 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={handleShowNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
          <h1 className='sm:m-0 mb-[0.1rem] mr-[8rem] font-bold text-[32px] tracking-normal'>sneakers</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'mt-2 bg-gray-900 text-white' : 'text-gray-500 mt-[0.6rem]  hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
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
              className=" p-1 text-gray-400 lg:mr-4 focus:ring rounded-full "
              onClick={()=> setShowCartDetails(!showCartDetails)}
            >
              <span className="sr-only">View notifications</span>
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
             </button>

            {/* Profile dropdown */}
        <div onClick={()=> setShowCartDetails(!showCartDetails)}  className="ml-3 cursor-pointer">
  <div className="relative ml-3 cursor-pointer" 
>
    <span className="sr-only ">Open user menu</span>
    <img
      className="lg:h-12 lg:w-12 h-8 w-8 rounded-full hover:ring-2 hover: ring-orange-500 focus:ring-2 focus:ring-orange-500"
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
  </div>
 {showCartDetails ? (
 <>
  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
       Show cart
  </div>
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
                    item.current ? 'text-black' : 'text-black hover:bg-gray-700 hover:text-white',
                    'block px-6 py-2 rounded-md text-base font-medium'
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
