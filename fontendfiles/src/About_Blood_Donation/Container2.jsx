import React from 'react'
import './style.css'

const Container2 = () => {
  return (
    <div className='bg2'>
    <div className='h-[47rem] w-full flex flex-col justify-center items-center backdrop-blur-[5px] bg-pink-600/10'>
     <div className='w-3/4 h-auto flex justify-start text-6xl text-white font-serif'>Benefits of Donating Blood</div>
     <p className='w-3/4 h-auto flex justify-start text-xl text-red-600 p-2 '>e-RaktKosh</p>
     <div className='h-[1px] w-3/4 bg-black mb-5'></div>
     <div className='w-3/4 h-auto flex justify-start items-start text-left border-2 rounded-xl backdrop-blur-sm bg-black/30 p-10 text-2xl text-white font-medium font-serif'>
     # Did you know that people who donate blood are 88% less likely to suffer a heart attack and 33% less likely to acquire any type of cardiovascular disease.

    <br /> # When you donate blood, it removes 225 to 250 milligrams of iron from your body, hence reducing the risk of heart disease.

    <br /> # Blood Center performs numerous tests on the donated blood. Therefore regular blood donation helps in sheilding you from serious diseases.

     </div>

     <div className='w-3/4 h-auto flex justify-start'>
       <button className='hover:bg-red-700 text-white m-3 bg-red-500 px-7 py-3 rounded-md text-lg mt-4'>Donate Now</button>
       <button className='hover:bg-red-700 text-white m-3 bg-red-500 px-7 py-3 rounded-md text-lg mt-4'>Register Now</button>

     </div>
   </div>
  </div>
  )
}

export default Container2
