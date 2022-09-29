import React from 'react'
import './style.css'
const Container4 = () => {
  return (
    <div className='bg4'>
    <div className='h-[47rem] w-full flex flex-col justify-center items-center backdrop-blur-[5px] bg-blue-600/10'>
     <div className='w-3/4 h-auto flex justify-start text-6xl text-white font-serif'>Stats about Blood</div>
     <p className='w-3/4 h-auto flex justify-start text-xl text-red-600 p-2 '>e-RaktKosh</p>
     <div className='h-[1px] w-3/4 bg-black mb-5'></div>
     <div className='w-3/4 h-auto flex justify-start items-start text-left border-2 rounded-xl backdrop-blur-sm bg-black/30 p-10 text-2xl text-white font-medium font-serif'>
     #According to a 2012 World Health Organisation (WHO) report, only nine million units are collected annually, while the need is for 12 million units. <br />

# Delhi NCR alone faces a shortage of 100,000 units per year. <br />

# The shelf-life of donated blood is 35 to 42 days. There is a constant need to replenish stocks in our blood banks. <br />

# Healthy donors are between the age of 18 to 65 years. <br />

# Statistics show that there are 234 million major operations in India, 63 million trauma-induced surgeries, 31 million cancer-related procedures and 10 million pregnancy related complications which require blood transfusions.

     </div>

     <div className='w-3/4 h-auto flex justify-start'>
       <button className='hover:bg-red-700 text-white m-3 bg-red-500 px-7 py-3 rounded-md text-lg mt-4'>Donate Now</button>
       <button className='hover:bg-red-700 text-white m-3 bg-red-500 px-7 py-3 rounded-md text-lg mt-4'>Register Now</button>

     </div>
   </div>
  </div>
  )
}

export default Container4
