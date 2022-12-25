import { faCalendar, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Blood.css"
const BloodStock = () => {
    return (
        <div className='p-32'>
            <h1 className='text-3xl text-red-700 mb-10'>Blood Stock availability</h1>
            <hr />
            <table class="styled-table">
    <thead>
        <tr>
            <th className='text-3xl bg-red-700'> Search Blood stock</th>
            <th className='text-3xl bg-red-700'> </th>
            <th className='text-3xl bg-red-700'> </th>
            <th className='text-3xl bg-red-700'></th>
           
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className='' ><select name="cars">
  <option value="volvo">Select division</option>
  <option value="saab">Dhaka</option>
  <option value="mercedes">Chattogram</option>
  <option value="audi">Rajshahi</option>
  <option value="audi">Khulna</option>
</select></td>
<td ><select name="cars" >
  <option value="volvo">Select district</option>
  <option value="saab">Dhaka</option>
  <option value="mercedes">Chattogram</option>
  <option value="audi">Rajshahi</option>
  <option value="audi">Khulna</option>
</select></td>
<td ><select className='active:border-teal-500 px-5' name="cars" >
  <option value="volvo">All blood groups</option>
  <option value="saab">A+ Ve</option>
  <option value="saab">A- Ve</option>
  <option value="mercedes">B+ Ve</option>
  <option value="mercedes">B- Ve</option>
  <option value="audi">AB+ Ve</option>
  <option value="audi">AB- Ve</option>
  <option value="audi">O+ Ve</option>
  <option value="audi">O- Ve</option>
</select></td>
<td ><select name="cars" >
  <option value="volvo">Whole blood</option>
  <option value="saab">single donor platellet</option>
  <option value="saab">single donor plasma</option>
  <option value="mercedes">Platellete rich plasma</option>
  <option value="mercedes">Platellete poor plasma</option>
  <option value="audi">Platellete concentrate</option>
  <option value="audi">plasma</option>
  <option value="audi">packed red cell</option>
  <option value="audi">Leucoreduced rbc</option>
  <option value="audi">Irradiated rbc</option>
  <option value="audi">Fresh frozen plasma</option>
  <option value="audi">cryoprecipitate</option>
  <option value="audi">cryo pool plasma</option>
</select></td>
        </tr>
       
    </tbody>
</table>
<div className='p-10 text-center '>
<button className='text-xl  bg-red-700 px-4 py-2 text-white' >Search</button>
</div>
<div className='text-2xl bg-gray-300 p-2  font-semibold'> 
<FontAwesomeIcon icon={faCalendar}  className="border-2 p-2 rounded-full bg-black text-white" />
<span className='ml-10'>Select district for stock availability</span></div>
<table class="styled-table">
    <thead>
        <tr>
            <th className=' bg-red-600 text-black border-x-2'> Serial no</th>
            <th className=' bg-red-600 text-black  border-x-2'> Blood Bank</th>
            <th className=' bg-red-600 text-black  border-x-2'> Category</th>
            <th className=' bg-red-600 text-black  border-x-2'> Availability</th>
            <th className=' bg-red-600 text-black  border-x-2'> Last Updated</th>
            <th className=' bg-red-600 text-black  border-x-2'> Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            
        </tr>
       
    </tbody>
</table>

        </div>
    );
};

export default BloodStock;