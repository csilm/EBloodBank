import React from 'react';
import mohfImg from '../images/icons/MOHF.png';
import indiaGovt from '../images/icons/india-gov.png';
import umang from '../images/icons/umang.jpg';
import nhp from '../images/icons/logo_nhp_back.png';
import nationalHealth from '../images/Rakt5.png';

const Footer = () => {
    return (
        <div>
            <footer class="mt-20 text-center bg-[#242729] lg:text-left text-white">

                <div class=" py-10 text-left mr-20">
                    <div class="mx-auto container grid grid-1 md:grid-cols-2 lg:grid-cols-4">
                        <div className='ml-8'>
                            <h6 class="uppercase font-semibold mb-4 flex items-center ">
                                Looking for Blood
                            </h6>
                            <p className=''>
                                <p className='mt-2'>Blood Availability</p>
                                <p className='mt-2'>Blood Black Directory</p>
                                
                                <p className='mt-2'>
                                Thalasemia Request
                                </p>
                            </p>
                        </div>
                        <div className='ml-8'>
                            <h6 class="uppercase font-semibold mb-4 flex items-center ">
                            Want to Donate Blood
                            </h6>
                            <p className=''>
                                <p className='mt-2'>Blood Availability</p>
                                <p className='mt-2'>Blood Black Directory</p>
                                
                                <p className='mt-2'>
                                Thalasemia Request
                                </p>
                            </p>
                        </div>
                        <div className='ml-8'>
                            <h6 class="uppercase font-semibold mb-4 flex items-center ">
                            Want to Donate Blood
                            </h6>
                            <p className=''>
                                <p className='mt-2'>Blood Availability</p>
                                <p className='mt-2'>Blood Black Directory</p>
                                
                                <p className='mt-2'>
                                Thalasemia Request
                                </p>
                            </p>
                        </div>
                        <div className='ml-8'>
                            <h6 class="uppercase font-semibold mb-4 flex items-center ">
                            Want to Donate Blood
                            </h6>
                            <p className=''>
                                <p className='mt-2'>Blood Availability</p>
                                <p className='mt-2'>Blood Black Directory</p>
                                
                                <p className='mt-2'>
                                Thalasemia Request
                                </p>
                            </p>
                        </div>
                    </div>
                </div>

                {/* logo section */}
                <div class="py-8 mr-20">
                    <div class="mx-auto container grid grid-1 md:grid-cols-2 lg:grid-cols-5">
                        <div className='ml-8'>
                           <img src={mohfImg} alt="" />
                        </div>
                        <div className='ml-8'>
                           <img src={indiaGovt} alt="" />
                        </div>
                        <div className='ml-8'>
                            <img src={umang} alt="" />
                            <p>Visitor No. 025855</p>
                        </div>
                        <div className='ml-8'>
                        <img src={nhp} alt="" />

                        </div>
                        <div className='ml-8'>
                        <img src={nationalHealth} alt="" />

                        </div>
                    </div>
                </div>
                <div className='flex justify-around'>
                    <p>© 2016 -2022 by Ministry of Health and Family Welfare</p>
                    <p>® Designed and Developed by Centre for Development of Advanced Computing</p>
                </div>
                <p className='text-center'>
                    Terms & Conditions | Privacy Policy | Accessibility Statement | Last Updated : Sep 25 2022 | Site Map</p>
               
            </footer>



        </div>
    );
};

export default Footer;