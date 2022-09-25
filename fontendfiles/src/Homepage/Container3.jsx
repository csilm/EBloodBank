import React from 'react'
import Img from './donationFact.webp'
import Img2 from './Blood.png'
import './style.css'

const Container3 = () => {
  return (
    <div className='main2 pt-10 h-auto w-full bg-white flex flex-row flex-wrap justify-center items-center'>
    <div className='lg:w-1/2 w-full md:p-10  h-[27rem] flex justify-center items-center my-2 text-2xl font-mono font-bold text-red-600'>LEARN ABOUT DONATION</div>
    <div className='lg:w-1/2 w-full p-0 h-auto lg:h-[27rem] flex flex-col flex-wrap justify-center items-center'>
      <img className='rotate w-full h-auto' src={Img} alt="" />
      <h1 className='text-xl font-serif text-red-600 px-3'>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</h1>
      <button className='bg-red-700 p-1 px-4 text-white rounded-md mt-6'>Donate Now</button>
    </div>
    <div className='lg:w-1/2 w-full md:p-10 h-[27rem] flex justify-center items-center my-2'>
      <img className='h-full w-auto' src={Img2} alt="" />
    </div>
    <div className='lg:w-1/2 w-full md:p-10 h-[27rem] flex justify-center items-center my-2 '> </div>
  </div>
  )
}

export default Container3
