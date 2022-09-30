import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
const Thelasamialogin = () => {
    return (
        <>
            <div className=''>
                <Navigation />
                <div className=''>

                    <div id="small-modal" tabindex="-1" class=" overflow-y-auto flex justify-center items-center overflow-x-hidden w-full">
                        <div class="relative p-4 w-full max-w-3xl h-full md:h-auto">

                            <div class="relative bg-white rounded-lg shadow-lg border border-slate-200">

                                <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                                        Thelasamia Login
                                    </h3>

                                </div>

                                <div class="p-4">

                                    <div className='flex justify-evenly'>
                                        <div className='bg-[#FAFAFA] border border-slate-200 p-4'>
                                            <div className=' grid grid-cols-2 gap-4'>
                                                <div>
                                                    <label for="Organization_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Registered Mobile:</label>
                                                    <input type="text" id="Organization_name" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="Mobile" required="" />
                                                </div>
                                                <div>
                                                    <label for="Organization_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Organization Name:</label>
                                                    <input type="password" id="Organization_name" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="Password" required="" />
                                                </div>

                                            </div>
                                            <div>
                                                <div className='mt-2'>
                                                <p className='text-xl text-red-500 italic font-bold mb-4'>Captch</p>
                                                    <input type="text" id="Organization_name" class="w-full p-2.5 border border-gray-300 text-sm rounded-lg" placeholder="Captch" required="" />
                                                    <div className='grid gap-2 p-2'>
                                                    <button className='bg-red-500 text-white font-bold p-2 rounded-lg'>Sign In</button>
                                                    </div>
                                                    <div className='grid gap-2 p-2'>
                                                    <button className='bg-white border-slate-200 border font-bold p-2 rounded-lg'>Forgot Password</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <p className='text-xl text-green-500 font-bold mb-2'>Register Now</p>
                                            <div>
                                                <li>View/Add YourRegister</li>
                                                <li> Update your Profile</li>
                                                <li>Manage your Account</li>
                                            </div>
                                            <div className='p-2 grid'>
                                                    <button className='bg-red-500 text-white font-bold p-2 rounded-lg'>New Registration</button>
                                                    </div>
                                            <div className='p-2 grid'>
                                                    <button className='bg-blue-500 text-white font-bold p-2 rounded-lg'>Instructions</button>
                                            </div>
                                            <div className='p-2 grid'>
                                                    <button className='bg-red-500 text-white font-bold p-2 rounded-lg'>New more</button>
                                                    </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Thelasamialogin;