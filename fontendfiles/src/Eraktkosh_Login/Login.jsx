import React from 'react'
import './style.css'
const Login = () => {

  const close = document.getElementById('all')
  const handleclick=()=>
  {
    close.classList.add('hide')
  } 
  return (
    <div className='bg3 w-full h-auto p-10'>
    <div className='h-[47rem] w-full flex flex-col justify-center items-center '>
     <div className='w-3/4 h-auto flex justify-center text-4xl text-white font-serif p-10'>eRaktKosh Login</div>
     <div className='w-5/6 lg:w-1/2 md:w-2/3 h-auto flex justify-start items-start text-left border-1 rounded-xl backdrop-blur-sm bg-black/20 p-10 text-2xl text-white flex-col'>
     <div className='w-full text-2xl font-semibold my-3'>Blood Bank Login : Portal/Application</div>
     <div className='w-full text-lg font-thin my-3 '>Enter your username and password to login on:</div>
     <div className='w-full '><input className='w-full my-2 py-3 pl-4 text-lg rounded-md font-medium font-serif' type="text" name="" placeholder='Enter User name' id="" /></div>
     <div className='w-full '><input className='w-full my-2 py-3 pl-4 text-lg rounded-md font-medium font-serif' type="password" name="" placeholder='Enter password' id="" /> </div>
     <div className='w-full '><button className='w-full bg-red-400 my-3 py-1.5 rounded-md text-xl font-serif'>Sign In</button></div>
     <div className='w-full font-thin text-lg text-yellow-400'>Forgot Password?</div>

     </div>

     <div className='w-3/4 h-auto flex justify-center flex-wrap'>
       <button className=' text-lg mt-2 mx-4 sm:w-full lg:w-[7rem] text-white'>Home</button>
       <button className=' text-lg mt-2 mx-4 sm:w-full lg:w-[7rem] text-white'>View Stock</button>
       <button className=' text-lg mt-2 mx-4 sm:w-full lg:w-[7rem] text-white'>Contact Us</button>
       <button className=' text-lg mt-2 mx-4 sm:w-full lg:w-[7rem] text-white'>About</button>
       <button className=' text-lg mt-2 mx-4 sm:w-full lg:w-[7rem] text-white'>Help</button>
     </div>
     <div id='all'  className='w-3/4 lg:w-1/2 h-auto bg-pink-200 p-5 flex justify-center flex-wrap m-4 rounded-lg'>
      <div className='w-full flex pr-3 text-red-600 text-lg justify-end cursor-pointer'><p onClick={handleclick}>x</p></div>
      <div>for any help regarding eRaktkosh application
       drop a mail at eraktkosh[at]cdac[dot]in</div>
     </div>
   </div>
  </div>
  )
}

export default Login
