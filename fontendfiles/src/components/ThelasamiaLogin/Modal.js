import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Modal = ({setShowModal,showModal}) => {

    return (
        
           
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Instructon
                  </h3>
                  <button
                    className="p-1 ml-auto text-gray-500 float-right text-3xl leading-none "
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon className='' icon={faXmark} />
                  </button>
                </div>
                {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className='font-bold text-xl'>Thank you for visiting online Thalassemia request on e-RaktKosh. <br />
Workflow of processing your request is as follows:</p>
                  <p className="my-4 text-lg leading-relaxed">
                  <ul>
                    <li>1. e-RaktKosh is a platform where Thalassemia Patients can online register themselves and can submit their blood requests to the blood banks</li> <br />
                    <li>2. The request is immediately shared with the chosen blood bank</li> <br />
                    <li>3. The receiving blood bank may accept/reject the request based on requested blood units availability.</li> <br />
                    <li>4. If the request is approved, a SMS is sent to the patient .
                    </li> <br />
                    <li>5. The requester then can coordinate the blood bank for issue of blood on the date when his / her transfusion is due.</li>
                    </ul>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      
    );
};

export default Modal;