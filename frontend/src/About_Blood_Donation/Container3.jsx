import React from 'react'
import './style.css'

const Container3 = () => {
  return (
    <div className='bg3'>
    <div className='h-[47rem] w-full flex flex-col justify-center items-center backdrop-blur-[5px] bg-black/20'>
     <div className='w-3/4 h-auto flex justify-start text-6xl text-white font-serif'>Facts About Blood</div>
     <p className='w-3/4 h-auto flex justify-start text-xl text-red-600 p-2 '>e-RaktKosh</p>
     <div className='h-[1px] w-3/4 bg-black mb-5'></div>
     <div className='w-3/4 h-auto flex justify-start items-start text-left border-2 rounded-xl backdrop-blur-sm bg-black/30 p-10 text-2xl text-white font-medium font-serif'>
     # One unit of donated blood can save up to three lives.

    <br /> # You can donate blood every three months. It only takes 48 hours for your body fluids to be completely replenished. <br />

# Scientists have estimated the volume of blood in the human body to be eight percent of body weight. <br />

# There are 100,000 miles of blood vessels in an adult human body. <br />  

# A red blood cell can make a complete circuit of your body in 30 seconds. <br />

# White blood cells make up about 1% of your blood.

     </div>

     <div className='w-3/4 h-auto flex justify-start'>
       <button className='hover:bg-red-700 text-white m-3 bg-red-500 px-7 py-3 rounded-md text-lg mt-4'>Donate Now</button>
       <button className='hover:bg-red-700 text-white m-3 bg-red-500 px-7 py-3 rounded-md text-lg mt-4'>Register Now</button>

     </div>
   </div>
  </div>
  )
}

export default Container3
