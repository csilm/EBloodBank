import React from 'react'
import './donorlogin.css'
const Donorlogin = () => {
    return (
        <div>
            <div className="body grid place-content-center">
                <div className='loginBox'>
                    <div className="loginHead">
                        <h4 className='text-red-700'>Donor Login</h4>
                    </div>
                    <hr />
                    <div className="loginBody">
                        <div className="grid grid-cols-3">
                            <div className="col-span-2 ">
                                <div className='formDiv'>
                                    <form className='m-10' action="">
                                        <label for="username" class="form-label">Enter Mobile No. :</label><br />
                                        <input type="text" class="form-control" placeholder="Enter Mobile No" required />
                                        <button type='button' className='bg-red-400 hover:bg-red-600 ml-6 text-white btn'>Generate OTP</button>
                                    </form>
                                </div>
                            </div>
                            <div className="preRegisterDiv ml-4 mr-10">
                                <p class="lead"><b class="">Register Now</b></p>
                                <ul class="list-unstyled" style={{ lineHeight: "2" }}>
                                    <li class="tick"><span class="fa fa-check text-success"></span> View/Add your Donations</li>
                                    <li class="tick"><span class="fa fa-check text-success"></span> Update your Profile</li>
                                    <li class="tick"><span class="fa fa-check text-success"></span> Manage your Account</li>
                                </ul>
                                <br />
                                <div class="mt-5">
                                    <p><button type="submit" class="bg-red-400 hover:bg-red-600 mb-2 text-white btn2">Register Now</button></p>
                                    <p><button type="submit" class="bg-blue-400 hover:bg-blue-600 text-white btn2">Voluntary Donor Group</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donorlogin