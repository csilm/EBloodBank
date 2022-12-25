import React from 'react'

const Content = () => {
  return (
    <div className='w-full h-auto lg:h-[12rem]  flex flex-wrap justify-center items-center'>
      <div className='h-auto lg:w-1/3 w-full  flex flex-wrap justify-center items-center flex-col'>
        <div className='h-auto w-full flex flex-wrap p-2 justify-center items-center'>
            <h1 className='text-lg font-bold w-full justify-center items-center'>What is it?</h1>
            <p className='text-xs font-thin'>Blood Collected straight from the donor after its donation usually separated into red blood cells, platelets, and plasma.</p>
        </div>
        <div className='h-auto w-full flex flex-wrap p-2 justify-center items-center'>
            <h1 className='text-lg font-bold w-full justify-center items-center'>Who can donate?</h1>
            <p className='text-xs font-thin'>You need to be 18-65 years old, weigh 45kg or more and be fit and healthy.</p>
        </div>
      </div>
      <div className='h-auto lg:w-1/3 w-full border-black border-x-2 flex flex-wrap justify-center items-center flex-col'>
        <div className='h-auto w-full flex flex-wrap p-2 justify-center items-center'>
            <h1 className='text-lg font-bold w-full justify-center items-center'>User For?</h1>
            <p className='text-xs font-thin'> Stomach disease, kidney disease, childbirth, operations, blood loss, trauma, cancer, blood diseases, haemophilia, anemia, heart disease.
            </p>
        </div>
        <div className='h-auto w-full flex flex-wrap p-2 justify-center items-center'>
            <h1 className='text-lg font-bold w-full justify-center items-center'>Lasts For?</h1>
            <p className='text-xs font-thin'>Red cells can be stored for 42 days.</p>
        </div>
      </div>
      <div className='h-auto lg:w-1/3 w-full flex flex-wrap justify-center items-center flex-col'>
        <div className='h-auto w-full flex flex-wrap p-2 justify-center items-center'>
            <h1 className='text-lg font-bold w-full justify-center items-center'>How long does it take?</h1>
            <p className='text-xs font-thin'>15 minutes to donate.</p>
        </div>
        <div className='h-auto w-full flex flex-wrap p-2 justify-center items-center'>
            <h1 className='text-lg font-bold w-full justify-center items-center'>How often can I donate?</h1>
            <p className='text-xs font-thin'>Every 12 weeks</p>
        </div>
      </div>
    </div>
  )
}

export default Content
