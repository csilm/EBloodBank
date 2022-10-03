import React from 'react';
import logo from "../../images/Rakt5.png"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='flex justify-between '>
      <div className="bg-red-700 w-2/3 text-center h-screen">
        <h1 className='text-3xl text-white mt-32 font-extrabold'>Voluntery Donor Management</h1>
        <div className='text-center'>
          <img className='text-center ml-96 p-10' src={logo} alt="" />
        </div>
        <h1 className='text-2xl text-white'>Blood donation is simple four step process</h1>
        <div className='flex py-10 px-10 text-yellow-400 font-bold'>
          <div className='text-center'>
            <img className='ml-10' src={logo} alt="" />
            <p>Registration, where you sign up and go over eligibility.</p>
          </div>
          <div className='text-center'>
            <img className='ml-10' src={logo} alt="" />
            <p>Mini-physical,where your health is evaluated</p>
          </div>
          <div className='text-center'>
            <img className='ml-10' src={logo} alt="" />
            <p>The donation, which only takes about eight to ten minutes.</p>
          </div>
          <div className='text-center'>
            <img className='ml-10' src={logo} alt="" />
            <p>Refreshments, where you get a snack and drink afterwards.</p>
          </div>
        </div>
      </div>
      <div >
        <div className='mt-52 ml-12 shadow-lg  shadow-gray-500 mr-52 p-10 w-2/3'>
          <h1 className='text-3xl font-semibold'>Login</h1>
          <div>
            <input className='w-full py-3 px-2 border-y-2  mt-5 mb-5' type="text" placeholder='enter mobile number' /> <br />
            <input className='w-full py-3 px-2 border-y-2  mb-5' type="password" placeholder='enter password here' /> <br />
            <button className='text-xl bg-red-600 py-2 px-5 font-bold mt-6 text-white hover:bg-red-400 ease-in duration-300'>Login</button>
            <Link to="/register">  <button className='text-xl bg-red-600 py-2 px-5 font-bold mt-6 text-white ml-10  hover:bg-red-400 ease-in duration-300'>Register</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;