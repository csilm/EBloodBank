import React from 'react';

const BloodDirectory = () => {
    return (
        <div className='p-32'>
        <h1 className='text-3xl text-red-600 mb-10'>Nearest blood bank (BB)/Blood storage unit(BSU) </h1>
        <hr />
        <table class="styled-table">
<thead>
    <tr>
        <th className='text-3xl bg-red-600'> Search Blood stock</th>
        <th className='text-3xl bg-red-600'></th>
    </tr>
</thead>
<tbody>
    <tr>
        <td className='' ><select name="cars" id="cars">
<option value="volvo">Select division</option>
<option value="saab">Dhaka</option>
<option value="mercedes">Chattogram</option>
<option value="audi">Rajshahi</option>
<option value="audi">Khulna</option>
</select></td>
<td ><select name="cars" id="cars">
<option value="volvo">Select district</option>
<option value="saab">Dhaka</option>
<option value="mercedes">Chattogram</option>
<option value="audi">Rajshahi</option>
<option value="audi">Khulna</option>
</select></td>
    </tr>
   
</tbody>
</table>
<div className='p-10 text-center '>
<button className='text-2xl  bg-red-500 px-10 py-5 text-white' >Search</button>
</div>
<table class="styled-table">
<thead>
    <tr>
        <th className='text-xl bg-red-600'> Serial no</th>
        <th className='text-xl bg-red-600'> Name</th>
        <th className='text-xl bg-red-600'> Address</th>
        <th className='text-xl bg-red-600'> Phone</th>
        <th className='text-xl bg-red-600'>Email</th>
        <th className='text-xl bg-red-600'> Category</th>
        <th className='text-xl bg-red-600'> distance</th>
        <th className='text-xl bg-red-600'> Type</th>
    </tr>
</thead>
<tbody>
    <tr className='text-center'>
        no data available
    </tr>
   
</tbody>
</table>

    </div>
    );
};

export default BloodDirectory;