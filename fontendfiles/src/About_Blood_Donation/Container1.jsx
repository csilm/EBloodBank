import React from 'react'
import './style.css'

const Container1 = () => {
  return (
   <div className='bg1'>
     <div className='h-[47rem] w-full flex flex-col justify-center items-center backdrop-blur-[5px] bg-pink-600/10'>
      <div className='w-3/4 h-auto flex justify-start text-6xl text-white font-serif'>Why Donate Blood</div>
      <p className='w-3/4 h-auto flex justify-start text-xl text-red-600 p-2 '>e-RaktKosh</p>
      <div className='h-[1px] w-3/4 bg-black mb-5'></div>
      <div className='w-3/4 h-auto flex justify-start items-start text-left border-2 rounded-xl backdrop-blur-sm bg-black/30 p-10 text-2xl text-white font-medium font-serif'>
      # The most precious gift that one can give to another person is the gift of life i.e. blood. It is the essence of life.

     <br /> # Your blood saves more than one life when it is separated into its components (red blood cells, plasma etc.).

     <br /> # Blood is needed regularly for patients with diseases such as thalassemia and hemophilia, and also for the treatment of injuries after an accident, major surgeries, anemia, etc.

       <br /> # It improves your health.
      </div>

      <div className='w-3/4 h-auto flex justify-start'>
        <button className='hover:bg-red-700 text-white m-3 bg-red-500 px-7 py-3 rounded-md text-lg mt-4'>Donate Now</button>
        <button className='hover:bg-red-700 text-white m-3 bg-red-500 px-7 py-3 rounded-md text-lg mt-4'>Register Now</button>

      </div>
    </div>
   </div>
  )
}

export default Container1
