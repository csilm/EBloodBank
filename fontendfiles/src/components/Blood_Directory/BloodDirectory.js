import React from 'react';
import { faCalendar, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BloodDirectory = () => {
    return (
        <div className='p-32'>
        <h1 className='text-3xl text-red-700 mb-10'>Nearest Blood bank/blood storage unit(BSU)</h1>
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
<td > <input type="text"  className='p-2 w-full' placeholder='Blood bank or hospital name'/></td>
<td > <button className='text-lg  bg-red-500 px-4 py-2 text-white' >Search</button></td>
    </tr>
   
</tbody>
</table>

<div className='text-sm p-2 '> 
<span className='p-1 text-white  font-bold bg-blue-400 rounded'>user denied for geolocation</span> <br />
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='p-2 mt-5'/>
  <label for="vehicle1"> Govt Blood bank</label>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  className='p-2 mt-5 ml-5'/>
  <label for="vehicle1"> Other blood bank</label>
</div>
<div className='flex justify-end'>
   <span className='font-bold text-xl'> Search:  <input style={{border:"2px solid #37c8e6"}} type="text" placeholder='search' className='text-xl' /></span>
</div>
<table class="styled-table">
<thead>
    <tr>
        <th className=' bg-red-600 text-black border-x-2'> Serial no</th>
        <th className=' bg-red-600 text-black  border-x-2'> Name</th>
        <th className=' bg-red-600 text-black  border-x-2'> Address</th>
        <th className=' bg-red-600 text-black  border-x-2'> phone</th>
        <th className=' bg-red-600 text-black  border-x-2'> Email</th>
        <th className=' bg-red-600 text-black  border-x-2'> Category</th>
        <th className=' bg-red-600 text-black  border-x-2'> Distance(km)</th>
        <th className=' bg-red-600 text-black  border-x-2'> Type</th>
    </tr>
</thead>
<tbody>
    <tr>
        <h1 className='text-center'>no data available in table</h1>
    </tr>
   
</tbody>
</table>
    <div className='flex justify-between'>
    <h1 className='text-2xl'>Showing 0 of 0 entries</h1>
      <div>
        <span className=' text-2xl'>Previous</span>
        <span className='ml-5 text-2xl'>Next</span>
    </div>
      </div>
    </div>
    );
};

export default BloodDirectory;