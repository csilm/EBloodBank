import React from 'react'

const Content1 = () => {
  return (
    <div className='w-full h-auto lg:h-[12rem]  flex flex-wrap justify-center items-center'>
      <div className='h-auto lg:w-1/3 w-full  flex flex-wrap justify-center items-center flex-col'>
        <div className='h-auto w-full flex flex-wrap p-2 justify-center items-center'>
            <h1 className='text-lg font-bold w-full justify-center items-center'>What is it?</h1>
            <p className='text-xs font-thin'>The straw-coloured liquid in which red blood cells, white blood cells, and platelets float in.Contains special nutrients which can be used to create 18 different type of medical products to treat many different medical conditions.</p>
        </div>
        <div className='h-auto w-full flex flex-wrap p-2 justify-center items-center'>
            <h1 className='text-lg font-bold w-full justify-center items-center'>Who can donate?</h1>
            <p className='text-xs font-thin'>You need to be 18-70 (men) or 20-70 (women) years old, weigh 50kg or more and must have given successful whole blood donation in last two</p>
        </div>
      </div>
      <div className='h-auto lg:w-1/3 w-full border-black border-x-2 flex flex-wrap justify-center items-center flex-col'>
        <div className='h-auto w-full flex flex-wrap p-2 justify-center items-center'>
            <h1 className='text-lg font-bold w-full justify-center items-center'>User For?</h1>
            <p className='text-xs font-thin'>Immune system conditions, pregnancy (including anti-D injections), bleeding, shock, burns, muscle and nerve conditions, haemophilia,
            </p>
        </div>
        <div className='h-auto w-full flex flex-wrap p-2 justify-center items-center'>
            <h1 className='text-lg font-bold w-full justify-center items-center'>Lasts For?</h1>
            <p className='text-xs font-thin'>Plasma can last up to one year when frozen.</p>
        </div>
      </div>
      <div className='h-auto lg:w-1/3 w-full flex flex-wrap justify-center items-center flex-col'>
      <div className='h-auto w-full flex flex-wrap p-2 justify-center items-center'>
            <h1 className='text-lg font-bold w-full justify-center items-center'>How does it work?</h1>
            <p className='text-xs font-thin'>We collect your blood, keep plasma and return rest to you by apheresis donation.</p>
        </div>
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

export default Content1
