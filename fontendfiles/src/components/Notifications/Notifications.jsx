import React from 'react'
import './notifications.css'
const Notifications = () => {
    return (
        <div className='body mx-32'>
            <div className="grid">
                <div className='NotificationBox'>
                    <div className="NotificationHead">
                        <h4 className='text-red-700 text-3xl'>Notifications</h4>
                    </div>
                    <hr />
                    <div className="row marketing">
                        <div className="check-listing listing notifications mt-5">
                            <ul>
                                <li className="news-item">
                                    <span className="tab">Revised - Deferral Criteria for Blood Donation Post COVID-19 Vaccination 5May2021</span>
                                </li>
                                <li className="news-item">
                                    <span className="tab">Hands on in NHM Training for Blood Bank officials of Haryana State</span>
                                </li>
                                <li className="news-item">
                                    <span className="tab">eRaktKosh DO Level Training at Patna, Bihar on 18th of Jan 2021</span>
                                </li>
                                <li className="news-item">
                                    <span className="tab">Honable HFM Letter to all the State Health Ministers</span>
                                </li>
                                <li className="news-item">
                                    <span className="tab">Telangana State Training of Trainers for Strengthening of Blood Services</span>
                                </li>
                                <li className="news-item">
                                    <span className="tab">Jammu and Kashmir State Training of Trainers for Strengthening of Blood Services</span>
                                </li>
                                <li className="news-item"><span className="tab">eRaktKosh Services are now available through UMANG</span>
                                </li>
                                <li className="news-item">
                                    <span className="tab">Training of Trainers for Strengthening of Blood Services for the state of Uttar Pradesh</span>
                                </li>
                                <li className="news-item">
                                    <span className="tab">Training of Trainers for Strengthening of Blood Services for the state of Uttar Pradesh</span>
                                </li>
                                <li className="news-item">
                                    <span className="tab">Grant of Special Casual Leave for the purpose of blood donation</span>
                                </li>
                                <li className="news-item">
                                    <span className="tab">Letter Regarding Accessibility of Blood and Blood Disorders</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications