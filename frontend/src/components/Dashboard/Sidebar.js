import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';

const Sidebar = () => {
    const [register, setRegister] = useState(false);
    const registerHandle = () => {
        setRegister(true);
    }
    return (
        <>
        <div className='grid grid-cols-2 mt-2'>
            <aside class="w-64" aria-label="Sidebar">
                <div class="overflow-y-auto h-[600px] px-3 bg-[#BF222B] text-white rounded">
                    <ul class="space-y-2">
                        <li >
                            <a href="#" class="flex items-center p-2 font-normal rounded-lg hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span class="ml-3">Dashboard</span>
                            </a>
                        </li>
                        <li onClick={registerHandle}>
                            <a href="#" class="flex items-center p-2 font-normal rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700">

                                <span class="flex-1 ml-3 whitespace-nowrap">Total blood request</span>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 font-normal rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700">

                                <span class="flex-1 ml-3 whitespace-nowrap">Total blood request</span>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 font-normal rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700">

                                <span class="flex-1 ml-3 whitespace-nowrap">Total blood request</span>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 font-normal rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700">

                                <span class="flex-1 ml-3 whitespace-nowrap">Total User</span>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 font-normal rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700">

                                <span class="flex-1 ml-3 whitespace-nowrap">Total Thelasamia requedt</span>
                                
                            </a>
                        </li>
                       
                    </ul>
                </div>
            </aside>
            {
                register && <div className=''>
                    <p className='font-bold text-2xl'>Total Blood request</p>
                </div>
        }
            </div>
            </>
    );
};

export default Sidebar;