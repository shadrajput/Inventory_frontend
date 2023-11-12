import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../Models";
import { useFormik } from "formik";
import "../Css/ImageUploadCss.css"
import SwitcherFour from '../components/SwitcherFour';

function AdjustItemModel({ showModal, handleShowModal, PhoneDetails, is_Edit }) {
    const [Adhar_front, setadharfront] = useState("");
    const [DefaultadharFront, setdefaultadharfront] = useState();

    const handleModalClose = () => {
        handleShowModal(false);
    };

    function handleAdharFUpload(e) {
        setadharfront(() => e.target.files[0]);
        setdefaultadharfront(URL.createObjectURL(e.target.files[0]));
    }

    if (!showModal) {
        return <></>;
    }

    return (
        <Modal open={showModal}
            onClose={handleModalClose}
        >
            <Modal.Description className="inline-block w-2/3 ml-40 bg-white p-6 my-8 text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
                <div className="flex items-center">
                    <Modal.Title
                        as="h3"
                        className=" text-lg font-semibold text-blue-950">
                        {
                            is_Edit == true ?
                                "Update Model"
                                :
                                "Stock Adjustment"
                        }
                    </Modal.Title>
                    <div className="flex items-center ml-8 space-x-3">
                        <h1 className="font-semibold text-sm">Product</h1>
                        <div>
                           <SwitcherFour/>
                        </div>
                        <h1 className="font-semibold text-sm">Service</h1>
                    </div>
                    <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="match-formation-modal"
                        onClick={handleModalClose}
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                <Modal.Description>
                    <div className=" py-4">
                        <form action="">

                            <div className="flex justify-between py-10">
                                <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-40 border rounded-md border-slate-300" name="Name" id="" placeholder="Item Name" />
                                <input type="date" className="h-9 pl-2 focus:outline-blue-500 w-40 border rounded-md border-slate-300" name="GSTIN" id="" placeholder="Adjust " />
                            </div>
                            <div className="flex items-center space-x-5">
                                <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-50 border rounded-md border-slate-300" name="Name" id="" placeholder="Total Qty" />
                                <select name="" id="" className="h-9  focus:outline-blue-500 w-16 rounded-md border-slate-300">
                                    <option value="Psc">Psc</option>
                                </select>
                                <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-50 border rounded-md border-slate-300" name="Atprice" id="" placeholder="At Price " />
                                <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-full border rounded-md border-slate-300" name="Email ID" id="" placeholder="Details " />
                            </div>

                            {/* Business Details */}
                            <div className="flex justify-end mt-5">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-950 duration-500 text-white rounded-md px-8 py-[5px]">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Description>
            </Modal.Description>
        </Modal>
    );
}

export default AdjustItemModel;