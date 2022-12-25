import React from 'react'
import GoogleMap from './GoogleMap'

const Bank_Info = () => {
  return (
    <div className='h-auto w-full flex flex-wrap flex-col justify-center items-center mt-5'>

    

  <div className='shad h-auto w-full flex flex-col flex-wrap justify-start p-5 items-start my-5 '>
    <div className='title px-3 p-1 mb-5 text-xl font-semibold'>Blood Bank Address<span className='text-red-500'>*</span></div>
     <div className='h-auto w-full flex flex-row flex-wrap justify-around items-center'>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
        <div className='w-full flex flex-col lg:flex-row justify-start items-center font-semibold  '>
        <label htmlFor=""> State<span className='mr-1 text-red-400'>*</span></label>
          <select className='font-light border-2 w-full p-1 rounded-sm my-2'>
          <option value="Dhaka">Dhaka</option>
          <option value="Cumilla">Cumilla</option>
          <option selected value="Select One">Select State</option>
          <option value="Chittagong">Chittagong</option>
          </select>
        </div>
        
      </div>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-col lg:flex-row justify-start items-center font-semibold'>
        <label htmlFor="">District<span className='mr-1 text-red-400'>*</span></label>
          <select className='font-light border-2 w-full p-1 rounded-sm my-2'>
          <option value="Dhaka">Dhaka</option>
          <option value="Cumilla">Cumilla</option>
          <option selected value="Select One">Select State</option>
          <option value="Chittagong">Chittagong</option>
          </select>
        </div>
      </div>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label htmlFor=""> City<span className='mr-1 text-red-400'>*</span></label>
        <input className='border-2 w-full p-1 rounded-sm my-2' type="text" name="" id="" />
        </div>
      </div>
    </div>
  </div>



  <div className='shad h-auto w-full flex flex-col flex-wrap justify-start p-5 items-start my-5 '>
    <div className='title px-3 p-1 mb-5 text-xl font-semibold'>Blood Bank Details<span className='text-red-400'>*</span></div>

     <div className='h-auto w-full flex flex-row flex-wrap justify-center items-center'>
      <div className=' w-full h-auto flex flex-row flex-wrap justify-center items-center '>
      <div className='lg:w-1/2 w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label htmlFor=""> Blood Bank Name<span className='mr-1 text-red-400'>*</span></label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2' type="text" name="" id="" />
        </div>
        <div className='lg:w-1/2 w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label htmlFor=""> Parent Hospital Name </label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
      </div>



      <div className='lg:w-1/3 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Short Name</label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
        <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Email</label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
        <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Licence No.</label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
        <div className='w-full flex flex-col lg:flex-row justify-start items-center font-semibold'>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Component Facility</label>
          <select className='font-light border-2 w-full lg:w-1/2 p-1 rounded-sm my-2'>
          <option selected value="Select One">Select</option>
          <option value="Chittagong">Yes</option>
          <option value="Chittagong">No</option>
          </select>
        </div>
      </div>


      <div className='lg:w-1/3 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-col lg:flex-row justify-start items-center font-semibold'>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Category<span className='mr-1 text-red-400'>*</span></label>
          <select className='font-light border-2 w-full lg:w-1/2 p-1 rounded-sm my-2'>
          <option selected value="Select One">Select</option>
          <option value="Chittagong">Yes</option>
          <option value="Chittagong">No</option>
          </select>
        </div>
        <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Contact No.<span className='mr-1 text-red-400'>*</span></label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
        <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">From Date</label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
        <div className='w-full flex flex-col lg:flex-row justify-start items-center font-semibold'>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Apheresis Facility</label>
          <select className='font-light border-2 w-full lg:w-1/2 p-1 rounded-sm my-2'>
          <option selected value="Select One">Select</option>
          <option value="Chittagong">Yes</option>
          <option value="Chittagong">No</option>
          </select>
        </div>
        
      </div>


      <div className='lg:w-1/3 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Contact Person<span className='mr-1 text-red-400'>*</span></label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
        <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Fax No.</label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
        <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">To Date  </label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
        <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Helpline No.</label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
       
      </div>
    </div>
  </div>

  
  <div className='w-full h-auto flex flex-wrap justify-center items-center'>

    <div className='lg:w-1/2 sm:w-full flex flex-col justify-center items-center'>


    <div className='shad h-auto w-full flex flex-col flex-wrap justify-start p-5 items-start my-5 '>
    <div className='title px-3 p-1 mb-5 text-xl font-semibold'>Postal Address</div>
     <div className='h-auto w-full flex flex-row flex-wrap justify-around items-center'>
      <div className=' w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/3 text-left pl-3' htmlFor="">Address1<span className='mr-1 text-red-400'>*</span></label>
        <input className='border-2 w-full lg:w-2/3 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
        
      </div>
      <div className='w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/3 text-left pl-3' htmlFor="">Address2</label>
        <input className='border-2 w-full lg:w-2/3 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
      </div>
      <div className=' w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/3 text-left pl-3' htmlFor="">Pincode<span className='mr-1 text-red-400'>*</span></label>
        <input className='border-2 w-1/3 p-1 rounded-sm my-2' type="text" name="" id="" />
        </div>
      </div>
    </div>
  </div>



    <div className='shad h-auto w-full flex flex-col flex-wrap justify-start p-5 items-start my-5 '>
    <div className='title px-3 p-1 mb-5 text-xl font-semibold'>Geographical Coordinates</div>
     <div className='h-auto w-full flex flex-row flex-wrap justify-around items-center'>
      <div className='lg:w-1/2 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Latitude</label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
        
      </div>
      <div className='lg:w-1/2 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Longitude</label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
      </div>
      <div className=' w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
      <button className='m-1 p-1 px-3 rounded-md bg-red-500 text-white'>Geocode</button>
        <input className='border-2 w-full p-1 rounded-sm my-2' type="text" name="" id="" />
        </div>
      </div>
    </div>
  </div>





    </div>
    <div className='w-full h-auto lg:w-1/2 flex flex-col justify-center items-center'>
      <GoogleMap />
    </div>

  </div>
  <div className='lg:w-1/2 w-full mt-10 '>
  <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">Website</label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
        <div className=' w-full flex flex-col lg:flex-row justify-start items-center font-semibold '>
        <label className='w-full lg:w-1/2 text-left pl-3' htmlFor="">No of Bed Hospital</label>
        <input className='border-2 w-full lg:w-1/2 p-1 rounded-sm my-2 m-3' type="text" name="" id="" />
        </div>
  </div>
  
     <div className='mt-5 w-full flex flex-row justify-center items-center'>

      <button className='m-1 p-1 px-3 rounded-md bg-red-500 text-white'>Next</button>
      <button className='m-1 p-1 px-3 rounded-md bg-red-500 text-white'>Cancel</button>
     </div>
    
    </div>
  )
}

export default Bank_Info
