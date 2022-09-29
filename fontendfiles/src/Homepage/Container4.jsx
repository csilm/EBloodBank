import React,{useState} from 'react'
import Content from './Content'
import Content1 from './Content1'
import Content2 from './Content2'
import './style.css'


const Container4 = () => {
const [active,setactive] =useState('first')

  return (
    <div className='h-auto lg:h-[35rem] w-full lg:w-2/3 bg-slate-200'>
      <div className='w-full h-auto flex flex-wrap justify-center items center p-10 '>
        <h1 className='text-2xl text-red-500 font-bold font-mono'>TYPES OF DONATION</h1>
        <p className='leading-7 text-xs font-thin p-5 font'>The human body contains five liters of blood, which is made of several useful components i.e. Whole blood, Platelet, <br /> and Plasma.

Each type of component has several medical uses and can be used for different medical treatments. your blood donation determines the best donation for you to make.

For plasma and platelet donation you must have donated whole blood in past two years.</p>
      </div>
      <div className='w-full h-auto flex flex-wrap justify-center items center p-5 '>
        <div className='w-full h-auto flex flex-wrap justify-center items center p-5 '>
            <button className='text-xs rounded-sm  bg-slate-300 focus:bg-white px-5 py-2' onClick={()=>{setactive('first') }} >Whole Blood</button>
            <button className='text-xs rounded-sm bg-slate-300 focus:bg-white active:bg-white px-5 py-2' onClick={()=>{setactive('second')}} >Plasma</button>
            <button className='text-xs rounded-sm bg-slate-300 focus:bg-white active:bg-white px-5 py-2' onClick={()=>{setactive('third')}} >Platelet</button>

        </div>
        <div className='w-full h-auto flex flex-wrap justify-center items center '>
            {active==='first' && <Content/>}
            {active==='second' && <Content1/>}
            {active==='third' && <Content2/>}
            
        </div>
        <button className='tbt bg-red-500 text-xs py-2 px-4 rounded-sm hover:bg-blue-500 transition-1 text-white'>Find nearest bloodbank to donate</button>
      </div>
     
    </div>
  )
}

export default Container4