import React from 'react'
import './style.css'

const Container2 = () => {
   

  return (

    <div className='h-auto w-full flex justify-center flex-wrap items-center'>
     <div className='lg:h-[15rem] p-10 md:h-auto h-auto  w-full bg-slate-300 flex flex-row flex-wrap justify-center items-center'>
      <div className='lg:w-[17rem] flex justify-center items-center rounded-tl-2xl rounded-br-2xl md:w-[15rem] w-1/2 h-[8rem] bg-green-900 m-5 text-white text-lg font-bold'>677 <br /> Approved Camps </div>
      <div className='lg:w-[17rem] flex justify-center items-center rounded-tl-2xl rounded-br-2xl md:w-[15rem] w-1/2 h-[8rem] bg-blue-400 m-5 text-white text-lg font-bold'>3200 <br /> Donors Registered </div>
      <div className='lg:w-[17rem] flex justify-center items-center rounded-tl-2xl rounded-br-2xl md:w-[15rem] w-1/2 h-[8rem] bg-red-800 m-5 text-white text-lg font-bold'>3200 <br /> Donors Donated Blood </div>
    </div>
    <div className='lg:h-[15rem] p-10 md:h-auto h-auto  w-full bg-slate-700 flex flex-row flex-wrap justify-center items-center'>
      <div className=' lg:w-[12rem] md:w-[15rem] w-full h-[8rem] flex justify-center items-center main m-5'>
        <div className='text-md p-2 font-bold text-white absolute lg:w-[12rem] md:w-[15rem] w-2/3 h-[8rem] rounded-tr-2xl rounded-bl-2xl  flex justify-center items-center bg-blue-500 '>Blood Availability Search</div>
        <div className='underline text-md p-2 text-white absolute lg:w-[12rem] md:w-[15rem] w-2/3 h-[8rem] rounded-tr-2xl rounded-bl-2xl  flex justify-center items-center bg-red-800 sub'><a href="#">Check availability of blood across blood banks.</a></div>
         </div>
      <div className='  lg:w-[12rem] md:w-[15rem] w-full h-[8rem]  flex justify-center items-center main m-5'>
        <div className='text-md p-2 font-bold text-white absolute lg:w-[12rem] md:w-[15rem] w-2/3 h-[8rem] rounded-tr-2xl rounded-bl-2xl flex justify-center items-center bg-green-600 '>Blood bank Directory</div>
        <div className='underline text-md p-2  text-white absolute lg:w-[12rem] md:w-[15rem] w-2/3 h-[8rem] rounded-tr-2xl rounded-bl-2xl flex justify-center items-center sub bg-red-800'><a href="#">Search for blood banks in India.</a></div>
          </div>
      <div className=' lg:w-[12rem] md:w-[15rem] w-full h-[8rem]  flex justify-center items-center main m-5'>
        <div className='text-md p-2 font-bold text-white absolute lg:w-[12rem] md:w-[15rem] w-2/3 h-[8rem] rounded-tr-2xl rounded-bl-2xl  flex justify-center items-center bg-yellow-600 '> Blood donation camp</div>
        <div className='underline text-md p-2 text-white absolute lg:w-[12rem] md:w-[15rem] w-2/3 h-[8rem] rounded-tr-2xl rounded-bl-2xl  flex justify-center items-center sub bg-red-800'><a href="#">Donate blood at a blood donation camp.</a></div>
          </div>
      <div className=' lg:w-[12rem] md:w-[15rem] w-full h-[8rem]  flex justify-center items-center main m-5'>
        <div className='text-md p-2 font-bold text-white absolute lg:w-[12rem] md:w-[15rem] w-2/3 h-[8rem] rounded-tr-2xl rounded-bl-2xl  flex justify-center items-center bg-red-600  '>Donor Login</div>
        <div className='underline text-md p-2  text-white absolute lg:w-[12rem] md:w-[15rem] w-2/3 h-[8rem] rounded-tr-2xl rounded-bl-2xl  flex justify-center items-center sub bg-red-800 '><a href="">Donor profile.</a></div>
         </div>
      <div className=' lg:w-[12rem] md:w-[15rem] w-full h-[8rem]  flex justify-center items-center main m-5'>
        <div className='text-md p-2 font-bold text-white absolute lg:w-[12rem] md:w-[15rem] w-2/3 h-[8rem] rounded-tr-2xl rounded-bl-2xl  flex justify-center items-center bg-green-800 '>Register as Voluntary Blood Camp.</div>
        <div className='underline text-md p-2 text-white absolute lg:w-[12rem] md:w-[15rem] w-2/3 h-[8rem] rounded-tr-2xl rounded-bl-2xl  flex justify-center items-center bg-red-800 sub'><a href="#">Register as Voluntary Blood Camp.</a></div>
         </div>
    </div>
    </div>
    
  )
}

export default Container2
