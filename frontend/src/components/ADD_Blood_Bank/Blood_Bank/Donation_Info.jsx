import React from 'react'
import './style.css'
const Donation_Info = () => {
  return (
<div className='h-auto w-full flex flex-wrap flex-col justify-center items-center mt-5'>

    

  <div className='shad h-auto w-full flex flex-col flex-wrap justify-start p-5 items-start my-5 '>
    <div className='title px-3 p-1 mb-5 text-xl font-semibold'>Donor Type<span className='text-red-500'>*</span></div>
     <div className='h-auto w-full flex flex-row flex-wrap justify-center items-center'>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Voluntary</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Family</label>
        </div>
        
      </div>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Replacement</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Directed</label>
        </div>
      </div>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Autologous</label>
        </div>
      </div>
      <div className='lg:w-1/4 w-full  h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Replacement External</label>
        </div>
        
      </div>
    </div>
  </div>

  <div className='shad h-auto w-full flex flex-col flex-wrap justify-start p-5 items-start my-5 '>
    <div className='title px-3 p-1 mb-5 text-xl font-semibold'>Donation Type<span className='text-red-400'>*</span></div>
     <div className='h-auto w-full flex flex-row flex-wrap justify-center items-center'>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Leucaperesis</label>
        </div>
      </div>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Plasmapheresis</label>
        </div>
        
      </div>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Plateletpheresis</label>
        </div>
      </div>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Whole Blood</label>
        </div>
       
      </div>
    </div>
  </div>

  <div className='shad h-auto w-full flex flex-col flex-wrap justify-start p-5 items-start my-5 '>
    <div className='title px-3 p-1 mb-5 text-xl font-semibold'>Component Type</div>
     <div className='h-auto w-full flex flex-row flex-wrap justify-center items-center'>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Cryo Poor Plasma</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Cryoprecipitate</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Fresh Frozen Plasma</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Irradiated RBC</label>
        </div>
      </div>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Leukoreduced Rbc</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Packed Red Blood Cells</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Plasma</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Platelet Concentrate</label>
        </div>
      </div>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Platelet Poor Plasma</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Platelet Rich Plasma</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Sagm Packed Red Blood Cells</label>
        </div>
        
      </div>
      <div className='lg:w-1/4 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Single Donor Plasma</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Single Donor Platelet</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Whole Blood</label>
        </div>
        
      </div>
    </div>
  </div>


  <div className='shad h-auto w-full flex flex-col flex-wrap justify-start p-5 items-start my-3 '>
    <div className='title px-3 p-1 mb-5 text-xl font-semibold'>Bag Type</div>
     <div className='h-auto w-full flex flex-row flex-wrap justify-center items-center'>
      <div className='lg:w-1/3 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Single (350/450ml)</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Double (350/450ml)</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Triple (350/450ml)</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Quadruple (450 ml) with inline filter</label>
        </div>
      </div>
      <div className='lg:w-1/3 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Quadruple (450 ml) without inline filter</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Penta Bag (450 ml)</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Transfer Bags</label>
        </div>
       
      </div>
      <div className='lg:w-1/3 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Apheresis Kits</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Triple (350 Ml) CPD/SAGM</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Triple (450 Ml) CPD/SAGM</label>
        </div>
      </div>
    </div>
  </div>


  <div className='shad h-auto w-full flex flex-col flex-wrap justify-start p-5 items-start my-3 '>
    <div className='title px-3 p-1 mb-5 text-xl font-semibold'>TTI Type</div>
     <div className='h-auto w-full flex flex-row flex-wrap justify-center items-center'>
      <div className='lg:w-1/3 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> HIV 1&2</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Hepatitis-B</label>
        </div>
      </div>
      <div className='lg:w-1/3 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor="">Hepatitis-C</label>
        </div>
        <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Syphilis</label>
        </div>
      </div>
      <div className='lg:w-1/3 w-full h-auto flex flex-col flex-wrap justify-center items-center '>
      <div className='w-full flex flex-row '>
        <input className='m-2' type="checkbox" name="text" id="" />
        <label htmlFor=""> Malaria</label>
        </div>
      </div>;
    </div>
  </div>



      <div className='shad h-auto w-full flex flex-row flex-wrap justify-start p-5 items-start my-3 '><div className='title px-3 p-1 mb-5 text-xl font-semibold'>Remarks</div>
      <div className='w-full h-auto flex flex-col flex-wrap justify-start items-start '>
        <input className='w-3/4 border-2 h-[8rem] border-slate-300  p-5 top-0 relative' type="text" name="" id="" />
       
       
      </div>
     
      </div>

     <div className='mt-5 w-full flex flex-row justify-center items-center'>
      <button className='m-1 p-1 px-3 rounded-md bg-red-500 text-white'>Save</button>
      <button className='m-1 p-1 px-3 rounded-md bg-red-500 text-white'>Back</button>
      <button className='m-1 p-1 px-3 rounded-md bg-red-500 text-white'>Cancel</button>
     </div>
    
    </div>
  )
}

export default Donation_Info
