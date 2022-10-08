import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import logo from '../images/Rakt5.png';

const Navigation = () => {
    const [nav, setNav] = useState(false);
    const [nav2, setNav2] = useState(false);
    const handleNavbar = () => {
        setNav(!nav);
    }
    const handleNavbar2 = () => {
        setNav2(!nav);
    }

    return (
        <div className=''>
            <div className='text-right mb-4 text-white'>
                <a href="#" className='p-2 ml-2 bg-[#bf222b]'>A</a>
                <a href="#" className='p-2 ml-2 bg-[#bf222b]'>A+</a>
                <a href="#" className='p-2 ml-2 bg-[#bf222b]'>A</a>
                <a href="#" className='p-2 ml-2 bg-[#bf222b]'>A-</a>
                <a href="#" className='p-2 ml-2 bg-[#bf222b]'>Screen render</a>
            </div>
            <hr />
            <nav class=''>
                <div class="ml-auto container">
                    <div class="relative flex h-16 justify-between">
                        <div class="absolute inset-y-0 right-0 flex items-center lg:hidden">
                            <button onClick={handleNavbar} type="button" class="rounded-md p-2 text-gray-400 bg-[#fab811] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>

                                <svg class="block h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex sm:items-stretch sm:justify-start">
                            <div class="flex flex-shrink-0 mb-[38px] md:w-48 sm:w-16 items-center">
                                <img src={logo} className="" alt="" />
                            </div>

                            <div className='flex ml-28 space-x-4'>
                                {/* hoverable */}
                                <nav aria-label="primary" class="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">

                                    <div class="relative group">
                                        <button class="flex flex-row items-center w-full px-4 py-4 mt-2  text-left uppercase bg-transparent hover:bg-[#bf222b] hover:text-white md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none ease-out duration-300">
                                            <span>About us</span>
                                        </button>
                                        <div class="absolute hidden bg-grey-200 group-hover:block">

                                            <div class="px-3 pt-2 pb-4 shadow-lg">
                                                <ul className='grid grid-cols-1 gap-4 w-[200px] bg-white'>
                                                  <Link to="/">  <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Home</li></Link>
                                                  <Link to="/">  <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>About</li></Link>
                                                    <Link to="/notification"><li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Notifications</li> </Link>
                                                    <Link to="/faq"><li className='px-2'>Faqs</li></Link>
                                                   <Link> <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Gallery</li></Link>
                                                    <Link to="/videogallary"><li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>video Gallery</li></Link>
                                                    <Link to="/contactUs"><li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Contact us</li></Link>
                                                   <Link to="/"> <li className='px-2 hover:text-red-600 ease-in-out duration-200 pb-4 hover:translate-x-1'>Mobile apps</li></Link>                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative group">
                                        <button class="flex flex-row items-center w-full px-4 py-4 mt-2  text-left uppercase bg-transparent hover:bg-[#bf222b] hover:text-white md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none ease-out duration-300">
                                            <span>Looking For Blood</span>
                                        </button>
                                        <div class="absolute hidden bg-grey-200 group-hover:block">

                                            <div class="px-2 pt-2 pb-4 shadow-lg">
                                                <ul className='grid grid-cols-1 gap-4 w-[200px] bg-white'>
                                                   <Link to="/bloodstock"> <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Blood availability</li></Link>
                                                    <Link to="/bloodDirectory"><li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Blood bank directory</li></Link>
                                                   <Link to="/thelasamia"> <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1 pb-4' >Thalassemia request</li>
                                                   </Link>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative group">
                                        <button class="flex flex-row items-center w-full px-4 py-4 mt-2  text-left uppercase bg-transparent hover:bg-[#bf222b] hover:text-white md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none ease-out duration-300">
                                            <span>Want to donate blood</span>
                                        </button>
                                        <div class="absolute hidden group-hover:block">

                                            <div class="px-2 pt-2 pb-4 bg-white shadow-lg">
                                                <ul className='grid grid-cols-1 gap-4 w-[200px] bg-white'>
                                                <Link to=""> <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Blood donation camp</li></Link>
                                                <Link to="/DonorRegistration"> <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Appointment for blood bank</li></Link>
                                                <Link to="/Dlogin"> <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Donor login</li></Link>
                                                <Link to="/login"> <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Voluntery donor group</li></Link>
                                                <Link to="/aboutBloodDonation"> <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>About blood donation </li></Link>
                                                <Link to="/registerVBD"> <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Register VDB camp </li></Link>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative group">
                                        <button class="flex flex-row items-center w-full font-bold px-4 py-4 mt-2  text-left uppercase bg-transparent hover:bg-[#bf222b] hover:text-white md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none ease-out duration-300">
                                            <span >Blood bank log in</span>
                                        </button>
                                        <div class="absolute hidden bg-grey-200 group-hover:block">

                                            <div class="px-2 pt-2 pb-4 shadow-lg">
                                                <ul className='grid grid-cols-1 gap-4 w-[200px] bg-white'>
                                                <Link to="/eRaktokoshLogin"> <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Eraktakosh login </li></Link>
                                                <Link to="/registerVBD"> <li className='px-2 hover:text-red-600 ease-in-out duration-200 hover:translate-x-1'>Add your blood bank </li></Link>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="lg:hidden">
                    <div class="space-y-1 pt-2 pb-3">

                        {
                            nav && <div>
                                <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>

                                <div className='flex justify-between'>
                                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</a>
                                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <button onClick={handleNavbar2} type="button" class="rounded-md p-2 text-gray-400 bg-[#fab811] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>

                                <svg class="block h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                                </a>
                                </div>

                                <div class="relative group">
                                        <button class="flex flex-row items-center w-full font-bold px-4 py-4 mt-2  text-left uppercase bg-transparent hover:bg-[#bf222b] hover:text-white md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                                            <span>Bllod bank log in</span>
                                        </button>
                                        <div class="absolute hidden bg-grey-200 group-hover:block">

                                            <div class="px-2 pt-2 pb-4 shadow-lg">
                                              {nav2 &&  <ul className='grid grid-cols-1 gap-4 bg w-[200px]'>
                                                    <li>Blood bank directory</li>
                                                    <li>Blood donation camp</li>
                                                </ul>}
                                            </div>
                                        </div>
                                    </div>
                                { nav2 &&
                                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact us</a>
                                }
                            </div>
                        }
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navigation;