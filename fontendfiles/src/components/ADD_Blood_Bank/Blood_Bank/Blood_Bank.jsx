import React,{useState} from 'react'
import Bank_Info from './Bank_Info'
import Donation_Info from './Donation_Info'

const Blood_Bank = () => {

    const [active,setActive] = useState('first')

  return (
    <div className='h-auto w-full flex flex-wrap flex-col justify-center items-start  p-20 '>
    <h1 className='text-2xl text-red-500 font-semibold py-2'>Blood Bank Details</h1>
    <div className='w-full flex flex-wrap justify-start border-b-1 border-t-2 border-slate-200 pt-5 py-3 items-start'>
        <button  onClick={()=>{setActive('first')}}  className='border-slate-300 border-b-2 border-x-0  focus:border-x-2 focus:border-b-0 focus:border-t-2 p-2 rounded-sm hover:bg-slate-100'>Blood Bank Information<span className='bg-slate-300 text-black px-1.5 m-1 text-sm rounded-full'>1</span></button>
        <button  onClick={()=>{setActive('second')}} className='border-slate-300 border-b-2 border-x-0  focus:border-x-2 focus:border-b-0 focus:border-t-2 p-2 rounded-sm hover:bg-slate-100'>Donation Information  <span className='bg-slate-300 text-black px-1.5 m-1 text-sm rounded-full'>2</span></button>
    </div>
    <div className='w-full h-auto flex flex-wrap justify-center items center '>
            {active==='first' && <Bank_Info/>}
            {active==='second' && <Donation_Info/>}
            
        </div>
    </div>
  )
}

export default Blood_Bank
