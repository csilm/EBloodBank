import { faDroplet, faHandHoldingDroplet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const RegisterVBD = () => {
    return (
        <div className='pl-16 pr-16'>
            <div className='bg-[#FAFAFA] border-2 border-slate-200'>
                <p className='text-center bg-[#BF222B] text-white text-2xl font-bold p-4'>
                    <FontAwesomeIcon className='pr-2' icon={faHandHoldingDroplet} /> 
                    Camp Registration</p>
                <form>
                    <div class="grid mb-6 md:grid-cols-2 md:pl-14 gap-x-20 md:mx-24 sm:p-8">
                        <div>
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Organization Type:</label>
                            <select id="countries" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg">
                                <option selected="">Select Value</option>
                                <option value="">Red cross</option>
                                <option value="">RWA</option>
                                <option value="">Terapath Yadav</option>
                                <option value="">others</option>
                            </select>
                        </div>
                        <div>
                            <label for="Organization_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Organization Name:</label>
                            <input type="text" id="Organization_name" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" required="" />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Organizer Name:</label>
                            <input type="text" id="last_name" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" required="" />
                        </div>
                        <div>
                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">

                                </div>
                            </div>

                            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Organizer Mobile No:</label>
                            <input type="text" id="company" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" required="" />
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Organizer Email id:</label>
                            <input type="tel" id="phone" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required="" />
                        </div>
                        
                        <div>
                            <label for="visitors" class="block mb-2 font-medium">Co-Organizer Mobile:</label>
                            <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                        </div>
                        <div>
                            <label for="website" class="block block mb-2 font-medium">Camp Name:</label>
                            <input type="url" id="website" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" required="" />
                        </div>
                        <div>
                            <label for="visitors" class="block block mb-2 font-medium">Came Address:</label>
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
                            <label for="visitors" class="block mb-2 font-medium">City Name:</label>
                            <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                        </div>
                        <div>
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Blood Bank:</label>
                            <select id="countries" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg">
                                <option selected="">Select blood bank</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label for="visitors" class="block mb-2 font-medium">Camp Propose Date:</label>
                            <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                        </div>
                        <div className='md:grid md:grid-cols-2 sm:grid sm:grid-cols-1'>
                            <div>
                            <label for="visitors" class="block mb-2 font-medium">Start Time(24HH:MM) :</label>
                                <div className='flex '>
                                <input type="text" id="visitors" class="w-12 border p-2.5 border-gray-300 text-sm rounded-lg" defaultValue="5" required="" />
                                
                                <input type="text" id="visitors" class="w-12 p-2.5 border border-gray-300 text-sm rounded-lg" defaultValue="34" required="" />
                                </div>
                            </div>
                            <div>
                            <label for="visitors" class="block mb-2 font-medium">End time(24HH:MM):</label>
                            <div className='md:flex sm:flex'>
                                <input type="text" id="visitors" class="w-12 p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" defaultValue="17" required="" />
                                
                                <input type="text" id="visitors" class="w-12 p-2.5 border border-gray-300 text-sm rounded-lg" defaultValue="25"  />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label for="visitors" class="block mb-2 font-medium">Latitude:</label>
                            <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                        </div>
                        <div>
                            <label for="visitors" class="block mb-2 font-medium">Longtitude:</label>
                            <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                        </div>
                        <div>
                            <label for="visitors" class="block mb-2 font-medium">Estimated Participants:</label>
                            <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                        </div>
                        <div>
                            <label for="visitors" class="block mb-2 font-medium">Refernce/Camp Supporter(Prayojak):</label>
                            <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                        </div>
                        <div>
                            <label for="visitors" class="block mb-2 font-medium">Reamrks:</label>
                            <input type="text" id="visitors" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="" required="" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-green-900 p-4 text-white rounded-lg'>Submit</button>
                        <button className='bg-red-400 p-4 text-white rounded-lg ml-2'>Cancel</button>
                   </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterVBD;