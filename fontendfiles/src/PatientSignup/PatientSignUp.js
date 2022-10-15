import React from 'react';
import Navigation from '../components/Navigation/Navigation';

const PatientSignUp = () => {
    return (
        <>
            <Navigation/>
        <div className='pl-16 pr-16 mt-5'>
        <div className='bg-[#FAFAFA] border-2 border-slate-200'>
            <p className='text-center  text-[#BF222B] text-2xl font-bold p-4'>
            Thalassemia Patient SIGN-UP
</p>
            <form>
                <div class="grid mb-6 md:grid-cols-3 md:pl-14 gap-x-20 md:mx-24 sm:p-8">
                    <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">First Name:</label>
                    <input type="text" id="Organization_name" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" required="" />
                    </div>
                    <div>
                        <label for="Organization_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name:</label>
                        <input type="text" id="Organization_name" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" required="" />
                    </div>
                    <div>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Guardiant Name:</label>
                        <input type="text" id="last_name" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" required="" />
                    </div>
                    <div>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">

                            </div>
                        </div>

                        <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date of Birth:</label>
                        <input type="text" id="company" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" required="" />
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender:</label>
                        <input type="tel" id="phone" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required="" />
                    </div>
                    
                    <div>
                        <label for="visitors" class="block mb-2 font-medium">Email:</label>
                        <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                    </div>
                    <div>
                        <label for="website" class="block mb-2 font-medium">Camp Name:</label>
                        <input type="url" id="website" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" required="" />
                    </div>
                    <div>
                        <label for="visitors" class="block mb-2 font-medium">Came Address:</label>
                        <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                    </div>
                    <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">State:</label>
                        <select id="countries" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg">
                            <option selected="">Chittagong</option>
                            <option value="US">Cumilla</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Dhaka</option>
                        </select>
                    </div>
                    <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">District:</label>
                        <select id="countries" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg">
                            <option selected="">Chittagong</option>
                            <option value="US">Feni</option>
                            <option value="CA">Dhaka</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <label for="visitors" class="block mb-2 font-medium">Pincode:</label>
                        <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                    </div>
                    <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Hospital Type:</label>
                        <select id="countries" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg">
                            <option selected="">Select Hosital Type</option>
                            <option value="US">Govt.</option>
                            <option value="CA">Private</option>
                            <option value="FR">IRPS</option>
                        </select>
                    </div>
                    <div>
                        <label for="visitors" class="block mb-2 font-medium">Mobile No:</label>
                        <input type="number" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                    </div>
                    <div>
                        <label for="visitors" class="block mb-2 font-medium">Registered Hospital Name</label>
                        <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                    </div>
                    <div>
                        <label for="visitors" class="block mb-2 font-medium">Blood Taken from (Previously)</label>
                        <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                    </div>
                    
                    <div>
                        <label for="visitors" class="block mb-2 font-medium">Password:</label>
                        <input type="password" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                    </div>
                    <div>
                        <label for="visitors" class="block mb-2 font-medium">Confirm Password:</label>
                        <input type="password" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                            </div>
                             <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">State:</label>
                        <select id="countries" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg">
                            <option selected="">Chittagong</option>
                            <option value="US">Feni</option>
                            <option value="CA">Dhaka</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <label for="visitors" class="block mb-2 font-medium">Requirement Date:</label>
                        <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                    </div>
                    <div>
                        <label for="visitors" class="block mb-2 font-medium">Component</label>
                        <select id="countries" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg">
                            <option selected="">Select Component</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <label for="visitors" class="block mb-2 font-medium">Quantity:</label>
                        <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                    </div>
                </div>
                <div className='flex justify-center'>
                   
                    <button className='bg-red-400 p-3 text-white rounded-lg ml-2'>Sign Up</button>
               </div>
            </form>
        </div>
            </div>
            </>
    );
};

export default PatientSignUp;