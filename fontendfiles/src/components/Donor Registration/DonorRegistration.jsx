import React from 'react'
import './donorregistration.css'

const DonorRegistration = () => {
    return (
        <div className="body grid place-content-center">
            <div className='signUpBox'>
                <div className="signUpHead">
                    <h2 className='text-red-700 text-3xl my-7'>Donor Sign Up</h2>
                </div>
                <form action="">
                    <div className="signUpBody grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                        <div className='m-4'>
                            <label>Name</label>
                            <font color="red" class="">*</font><br />
                            <input type="text" name="donorFName" maxlength="33" value="" class="form-control" placeholder="Full Name" /><br />
                            <div className="align-center hidden">Please enter your Name</div>
                            <label>Age</label>
                            <font color="red" class="">*</font><br />
                            <input type="text" name="donorFName" maxlength="33" value="" class="form-control" placeholder="Full Name" required/><br />
                            <div className="align-center hidden">Please enter your age</div>
                            <label>Gender</label>
                            <font color="red" class="">*</font><br />
                            <input type="text" name="donorFName" maxlength="33" value="" class="form-control" placeholder="Select Value" required /><br />
                            <div className="align-center hidden">Please enter your Gender</div>
                            <label>Mobile</label>
                            <font color="red" class="">*</font><br />
                            <input type="text" name="donorFName" maxlength="33" value="" class="form-control" placeholder="Mobile No." required /><br />
                            <div className="align-center hidden">Please enter your Mobile No.</div>
                            <label>Email</label>
                            <input type="text" name="donorFName" maxlength="33" value="" class="form-control" placeholder="Email"/><br />
                            <div className="align-center hidden">Please enter your Email</div>
                        </div>
                        <div className='m-4'>
                            <label>Father Name</label>
                            <font color="red" class="">*</font><br />
                            <input type="text" name="donorFName" maxlength="33" value="" class="form-control" required/><br />
                            <div className="align-center hidden">Please enter your Father's Name</div>
                            <label>State</label>
                            <font color="red" class="">*</font><br />
                            <input type="text" name="donorFName" maxlength="33" value="" class="form-control" placeholder="Select State" required/><br />
                            <div className="align-center hidden">Please select State</div>
                            <label>District</label>
                            <font color="red" class="">*</font><br />
                            <input type="text" name="donorFName" maxlength="33" value="" class="form-control" placeholder="Select District" required/><br />
                            <div className="align-center hidden">Please select District</div>
                            <label>Address</label>
                            <input type="text" name="donorFName" maxlength="33" value="" class="form-control"/><br />
                            <label>Pincode</label>
                            <font color="red" class="">*</font><br />
                            <input type="text" name="donorFName" maxlength="33" value="" class="form-control" placeholder="Pin Code" required/><br />
                            <div className="align-center hidden">Please enter your Pic Code</div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 place-content-center" style={{textAlign:'center'}}>
                        <input type="text" id="mainCaptcha" disabled="disabled" style={{width:'58%', borderStyle: 'none', font: 'italic bold 30px &quot Comic Sans MS&quot', color: 'rgb(191, 34, 41)'}} />
                        <input type="text" id="txtInput" class="form-control" placeholder="Captcha" spellcheck="false" data-ms-editor="true" />
                    </div>
                    <div className="grid place-content-center">
                    <button type="button" class="text-white bg-red-700 btn" >Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DonorRegistration