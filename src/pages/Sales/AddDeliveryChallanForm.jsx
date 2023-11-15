import React, { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { AiFillSetting } from "react-icons/ai"
import { BiPlus } from "react-icons/bi"
import SwitcherFour from '../../components/SwitcherFour';
import { FaAngleDown } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";
import { IoCamera } from "react-icons/io5";


function AddDeliveryChallanForm
    ({ showModal, handleShowModal, PhoneDetails, is_Edit }) {
    const [Adhar_front, setadharfront] = useState("");
    const [DefaultadharFront, setdefaultadharfront] = useState();
    const [gstandaddress, setgstandaddress] = useState(true);
    const [creditandbalance, setcreditandbalance] = useState(false);

    const handleModalClose = () => {
        handleShowModal(false);
    };

    function GstandAddress() {
        setgstandaddress(true)
        setcreditandbalance(false)
    }

    function CreditandBalance() {
        setcreditandbalance(true)
        setgstandaddress(false)
    }

    return (
        <div
            onClose={handleModalClose}>
            <div className="inline-block w-full bg-[#92929227] text-left transition-all transform bg-gray-700 shadow-xl rounded-lg ">
                <div className="border-b py-5 px-10 border-slate-200 flex items-center">
                    <h1
                        as="h3"
                        className=" text-lg font-semibold text-blue-950">
                        {
                            is_Edit == true ?
                                "Update Model"
                                :
                                "Delivery Challan"
                        }
                    </h1>
                    <div className="absolute top-5 right-2.5 flex items-center space-x-3">
                        <AiFillSetting className="text-lg cursor-pointer" />
                        <NavLink
                            to="/Sales/DeliveryChallan">
                            <button
                                type="button"
                                className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-hide="match-formation-modal"
                                onClick={handleModalClose}
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6"
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
                        </NavLink>
                    </div>
                </div>

                <div className="">
                    <form action="">
                        {/* Name and Number Details */}
                        <div className="flex justify-between items-start px-5 py-10 ">
                            <div className="space-y-5">
                                <div className="flex space-x-6">
                                    <input type="text" className="h-9 pl-2 text-sm focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Name" id="" placeholder="Billing Name (Optional)" />
                                </div>
                            </div>
                            <div className="space-y-3 w-1/3">
                                <div className="flex items-center space-x-2 w-full">
                                    <label htmlFor="Invoice Number" className="text-slate-400 text-sm text-end w-full">Challan No</label>
                                    <input type="text" className="focus:outline-none border-b px-3 bg-transparent w-full" />
                                </div>
                                <div className="flex items-center justify-between space-x-2 w-full">
                                    <label htmlFor="Invoice Date" className="text-slate-400 text-sm text-end w-full">Invoice Date</label>
                                    <input type="Date" name="" id="" className="text-sm bg-transparent w-full" />
                                </div>
                                <div className="flex items-center justify-between space-x-2 w-full">
                                    <label htmlFor="Invoice Date" className="text-slate-400 text-sm text-end w-full">Due Date</label>
                                    <input type="Date" name="" id="" className="text-sm bg-transparent w-full" />
                                </div>
                                <div className="flex items-center justify-between space-x-2 w-full">
                                    <label htmlFor="State of supply" className="text-slate-400 text-sm text-end w-full">State of supply</label>
                                    <select name="state" id="" className="focus:outline-none text-sm bg-transparent w-full">
                                        <option value="Select">Select</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Name and Number Details */}

                        {/* Billing Calculation */}
                        <div className="bg-white py-5">
                            <h1>Items</h1>
                        </div>
                        {/* Billing Calculation */}

                        {/* Payment Type  */}
                        <div className="flex items-center justify-between py-10 px-5">
                            <div>
                                <div className="flex  items-center space-x-3 cursor-pointer font-medium border w-44 h-10 rounded-md uppercase text-xs px-3">
                                    <SlNotebook className="text-base" />
                                    <h1>Add Description</h1>
                                </div>
                                <div className="flex items-center space-x-3 cursor-pointer font-medium border w-32 mt-6 h-10 rounded-md uppercase text-xs px-3">
                                    <IoCamera className="text-base" />
                                    <h1>Add image</h1>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-center space-x-5">
                                    <div className="flex items-center space-x-3">
                                        <input type="checkbox" name="" id="" className="w-4 h-4" />
                                        <h1 className="text-sm">Round Off</h1>
                                        <input type="text" name="" id="" className="w-15 rounded-md border-2" />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <h1 className="text-sm">Total</h1>
                                        <input type="text" name="" id="" className="h-10  border-2 rounded-md" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Payment Type  */}

                        {/* Save & Print Buttons */}
                        <div className=" flex bg-white items-center justify-end space-x-5 py-5 px-5">
                            <div className="flex items-center cursor-pointer border h-9  rounded-md border-blue-500 ">
                                <h1 className="px-4 text-blue-500 ">
                                    Print
                                </h1>
                                <FaAngleDown className="w-8 h-9 p-2 text-blue-500 rounded-r-md border border-blue-500 " />
                            </div>
                            <div>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-950 duration-500 text-sm text-white rounded-md px-8 py-2">
                                    Save
                                </button>
                            </div>
                        </div>
                        {/* Save & Print Buttons */}

                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddDeliveryChallanForm;