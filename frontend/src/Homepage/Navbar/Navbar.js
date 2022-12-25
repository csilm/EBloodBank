import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/Rakt5.png"
const Navbar = () => {
    return (
        <div className='flex justify-around w-full '>
           <div>
            <img src={logo} alt="" />
           </div>
           <div className='flex justify-evenly items-center uppercase'>
            <p className='ml-5 p-3 text-l cursor-pointer hover:bg-red-700  hover:text-white'>About us</p>
           <Link to="/bloodstock">  <p  className='ml-5 p-3 text-l cursor-pointer hover:bg-red-700  hover:text-white'>Looking for blood</p></Link>
            <Link to="/registerVBD">
            <p  className='ml-5 p-3 text-l cursor-pointer hover:bg-red-700  hover:text-white'>Want to donate blood</p></Link>
         <Link to="/Dlogin">
         <p  className='ml-5 p-3 text-l font-bold cursor-pointer hover:bg-red-700  hover:text-white'>Blood bank login</p></Link>
           </div>
        </div>
    );
};

export default Navbar;