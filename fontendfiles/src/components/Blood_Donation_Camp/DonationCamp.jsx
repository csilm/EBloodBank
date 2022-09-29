import React from 'react'

const DonationCamp = () => {
  return (
    <div className='h-auto w-full flex justify-center flex-col items-center'>
      <div className='h-auto lg:w-3/4 w-full p-5 mt-10 font-medium text-red-500 text-3xl flex justify-start items-start font-serif'>Camp Schedule</div>
      <div className='h-auto lg:w-3/4 w-full p-4'>
        <div className='h-auto w-full bg-red-600 rounded-md flex justify-start p-4 px-5 text-lg text-white'>Camp Schedules</div>
        <div className='h-auto w-full flex flex-row flex-wrap justify-start items-start border-2 py-5'>
        <div className='h-auto lg:w-1/4 w-full'>
               <select className='border-2 w-3/4 p-2 mx-2 rounded-md my-3 focus:border-blue-400 focus:shadow-md' name="" id="" form="">
               <option value="">Select State</option>
                 <option value="Dhaka">Dhaka</option>
                 <option value="">Cumilla</option>
                 <option value="">Chittagong</option>
                 <option value="">Khulna</option>
              </select>
        </div>
        <div className='h-auto lg:w-1/4 w-full'>
               <select className='border-2 w-3/4 my-3 lg:mx-2 p-2 rounded-md focus:border-blue-400 focus:shadow-md' name="" id="" form="">
               <option value="">Select Thana</option>
                 <option value="">Burichong</option>
                 <option value="">Nobinagar</option>
                 <option value="">Muradnagar</option>
                 <option value="">Debidwer</option>
               </select>
        </div>
        <div className='h-auto lg:w-1/4 w-full'>
        <input className='border-2 w-3/4 my-3 lg:mx-2 p-1.5 rounded-md focus:border-blue-400 focus:shadow-md' type="date" name="" id="" />
        </div>
        <button className='h-auto my-4 hover:bg-red-600 bg-red-500 px-7 p-1.5 rounded-md lg:mx-0  mx-24 text-white'>Search</button>
        </div>
       

      </div>
    </div>
  )
}

export default DonationCamp
