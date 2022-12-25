import React from 'react';
import Navigation from '../Navigation/Navigation';

const About = () => {
    return (
        <div className=''>
            <Navigation></Navigation>
            <h1 className='text-3xl text-red-600 font-extrabold px-20 mt-10'>About E-raktakosh</h1>
            <hr />
            <h1 className='text-4xl text-center p-10 bg-gray-200 mt-8 w-2/3 ml-44'>e-Raktakosh:A Centralized Bank Management System</h1>
        
                <div>
                <p className='text-xl font-bold px-20 py-10'>eRaktKosh was Inaugurated on 7th April 2016 by Hon'ble Minister of Health and Family Welfare, Sh. J P Nadda.</p>
                <p className='px-24'> e-Rakt Kosh enforces Drug & Cosmetic Act, National blood policy standards and guidelines ensuring proper collection & donation, effective management and monitoring the quality and quantity of the donated blood. Considering the national roll out, e-Rakt Kosh has been developed with modular and scalable approach with configurable rule based architecture allowing customization to easily incorporate specific requirements from nationwide stakeholders.</p>
                </div>
                <div className='flex justify-around items-center mt-10 bg-gray-200'>
                    <div className='p-2'>
                        <h1 className='text-xl text-red-600 font-semibold'>Objectives</h1>
                        <ul className='mt-2 list-disc'>
                            <li className="">Safe and Adequate Blood Supplies</li>
                            <li>Reduced Turnaround Time</li>
                            <li>Preventing Wastage of Blood</li>
                            <li>Restrict Professional Donors</li>
                            <li>Networking of Blood Banks</li>
                            <li>Donor Repository</li>
                        </ul>
                    </div>
                    <div className=''> 
                            <h1 className='text-xl text-red-600 font-semibold' >Salient features</h1>
                            <ul className='mt-2 list-disc'>
                            <li className="">Web Based Application</li>
                            <li>Aadhar Linkage</li>
                            <li>Decision Suppport</li>
                            <li>Enforces Guidelines</li>
                            <li>Dashboard</li>
                            <li>Statutory Reports</li>
                        </ul>
                    </div>
                    <div className='p-8'>
                           <img src="https://eraktkosh.in/BLDAHIMS/hisglobal/images/eRaktKoshBrouchure.jpg" alt="" />
                    </div>
                </div>
                <div className='p-5'>
                    <p className='text-xl font-extrabold p-10'>e-Rakt Kosh has six major components for management of the blood donation life cycle:</p>
                    <ul className='px-16 list-disc'>
                        <li>The bio metric Donor Management System for identifying, tracking and blocking donors based on donor's health, donation history etc.</li>
                        <li>It provides features such as blood grouping, TTI screening, antibody screening, component preparation etc. as per the defined processes and rules.</li>
                        <li>
                        A centralized Blood Inventory Management System for keeping track of the blood stock across numerous blood banks.
                        </li>
                        <li>Bio-Medical Waste Management System for disposal of discarded blood and other waste generated during this process.</li>
                        <li>
                        Generation of rare blood group donor registries and the generation of regular repeat donors
                        </li>
                        <li>Alert and Notification System</li>
                    </ul>
                </div>
           
        </div>
    );
};

export default About;