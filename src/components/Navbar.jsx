import React, { useRef, useEffect } from 'react';
import mainLogo from '../assets/book-logo.png';
import cartLogo from '../assets/cart.png';
import loginLogo from '../assets/login.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';

function Navbar() {

  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.addEventListener('click', handleClick);
    return () => {
      myRef.current.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (event) => {
    let menu = document.querySelector('#menu');
    menu.classList.toggle('hidden');
  };

  return (
   
    <section className='lg:w-5/6 mx-auto bg-[#FECD66]'>
      <header>


        <nav className=" bg-[#FECD66] dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to={ROUTES.HOME} className="flex items-center space-x-3 rtl:space-x-reverse">

              <img src={mainLogo} alt="" className='w-8' />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-[#B95255]'>B</span><span className='text-yellow-500'>oo</span><span className='text-[#34AE9F]'>k </span> <span className='text-[#B95255]'>H</span><span className='text-[#2684C7]'>aven</span></span>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3 items-center">
            
              <span className="block lg:hidden">
                {/* For Mobile Device Show Only Icons */}
                <img src={cartLogo} alt="" className='w-6' />
              </span>
              {/* For Large Device Show Only Text */}
              <span className="hidden lg:block">
                <button type="button" className="text-white bg-[#CF500F] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Book</button>
              </span>

              <span className="block lg:hidden">
                {/* For Mobile Device Show Only Icons */}
                <img src={loginLogo} alt="" className='w-6' />
              </span>
              {/* For Large Device Show Only Text */}
              <span className="hidden lg:block">
                <button type="button" className="text-white bg-[#BA4F55] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
              </span>

              <button data-collapse-toggle="menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" ref={myRef}>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div className="bg-[#FECD66] items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="menu">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#FECD66] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#FECD66] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link to={ROUTES.HOME} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                </li>
                <li>
                <span className="block py-2 px-3 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</span>
                </li>
                <li>
                <span className="block py-2 px-3 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</span>
                </li>
                <li>
                  <Link  to={ROUTES.FAQ} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header>
    </section>

  )

}



export default Navbar