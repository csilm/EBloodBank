import React from 'react'
import './style.css'
const Container6 = () => {
  return (
    <div className='bg1'>
    <div className='h-[47rem] w-full flex flex-col justify-center items-center backdrop-blur-[5px] bg-pink-600/10'>
     <div className='w-3/4 h-auto flex justify-start text-6xl text-white font-serif'>Pre Donation Screening</div>
     <p className='w-3/4 h-auto flex justify-start text-xl text-red-600 p-2 '>e-RaktKosh</p>
     <div className='h-[1px] w-3/4 bg-black mb-5'></div>
     <div className='w-3/4 h-auto flex justify-start items-start text-left border-2 rounded-xl backdrop-blur-sm bg-black/30 p-10 text-2xl text-white font-medium font-serif'>
     # During pre-donation screening, a blood bank employee will ask you some questions about your health, lifestyle, and disease risk factors. All of this information is confidential. <br />

# An employee will perform a short health exam, taking your pulse, temperature and blood pressure. A drop of blood from your finger will also be tested to ensure that your blood iron level is sufficient for you to donate. <br />

# All medical equipment used for this test, as well as during the donation process, is sterile, used only once and then disposed

     </div>

     <div className='w-3/4 h-auto flex justify-start'>
       <button className='hover:bg-red-700 text-white m-3 bg-red-500 px-7 py-3 rounded-md text-lg mt-4'>Donate Now</button>
       <button className='hover:bg-red-700 text-white m-3 bg-red-500 px-7 py-3 rounded-md text-lg mt-4'>Register Now</button>

     </div>
   </div>
  </div>
  )
}

export default Container6
