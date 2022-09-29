import React from 'react'
import './style.css'
const Container5 = () => {
  return (
    <div className='bg2'>
    <div className='h-[47rem] w-full flex flex-col justify-center items-center backdrop-blur-[5px] bg-yellow-600/10'>
     <div className='w-3/4 h-auto flex justify-start text-6xl text-white font-serif'>Before You Donate</div>
     <p className='w-3/4 h-auto flex justify-start text-xl text-red-600 p-2 '>e-RaktKosh</p>
     <div className='h-[1px] w-3/4 bg-black mb-5'></div>
     <div className='w-3/4 h-auto flex justify-start items-start text-left border-2 rounded-xl backdrop-blur-sm bg-black/30 p-10 text-2xl text-white font-medium font-serif'>
     # Donating blood is a safe, simple, and rewarding experience that usually takes 30 minutes. <br />

# To donate blood, find a blood bank near you using eRaktKosh Nearby Blood Bank Search. <br />

# Requirement before Blood Donation is that your weight should be atleast 45 kgs , be at least 18 years old and be healthy in general. <br />

# If you have any particular health concerns then inform the blood bank at the time of blood donation.

     </div>

     <div className='w-3/4 h-auto flex justify-start'>
       <button className='hover:bg-red-700 text-white m-3 bg-red-500 px-7 py-3 rounded-md text-lg mt-4'>Donate Now</button>
       <button className='hover:bg-red-700 text-white m-3 bg-red-500 px-7 py-3 rounded-md text-lg mt-4'>Register Now</button>

     </div>
   </div>
  </div>
  )
}

export default Container5
