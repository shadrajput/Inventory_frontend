import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../Models";
import { useFormik } from "formik";
import "../Css/ImageUploadCss.css"

function AddPartyModel({ showModal, handleShowModal, PhoneDetails, is_Edit }) {
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

    if (!showModal) {
        return <></>;
    }

    return (
        <Modal open={showModal}
            onClose={handleModalClose}
        >
            <Modal.Description className="inline-block w-2/4 bg-white p-6 my-8 text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
                <Modal.Title
                    as="h3"
                    className="mb-10 text-lg font-semibold text-blue-950">
                    {
                        is_Edit == true ?
                            "Update Model"
                            :
                            "Add Party"
                    }
                </Modal.Title>
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

                <Modal.Description>
                    <div className="px-4 mt-5 ">
                        <form action="">
                            <div className="flex space-x-6">
                                <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Name" id="" placeholder="Business Name *" />
                                <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="GSTIN" id="" placeholder="GSTIN " />
                                <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Phone NO" id="" placeholder="Phone NO " />
                            </div>

                            {/* Business Details */}
                            <div className="mt-10">
                                <div className="flex items-center space-x-10">
                                    <div className="flex flex-col" onClick={GstandAddress}>
                                        <h1 className="text-blue-500 ml-2 cursor-pointer mb-2  font-semibold">GST & Address</h1>
                                        <div className={`${gstandaddress == true ? "block" : "hidden"} bg-blue-500 h-1 w-36`}>

                                        </div>
                                    </div>
                                    <div className="flex flex-col" onClick={CreditandBalance}>
                                        <h1 className="text-blue-500 ml-2 cursor-pointer mb-2  font-semibold">Credit & Balance</h1>
                                        <div className={`${creditandbalance == true ? "block" : "hidden"} bg-blue-500 h-1 w-36`}>

                                        </div>
                                    </div>
                                    {/* <div className="flex flex-col">
                                        <h1 className="text-blue-500 ml-2 cursor-pointer mb-2  font-semibold">Additional Fields</h1>
                                        <div className="bg-blue-500 h-1 w-36 hidden  ">

                                        </div>
                                    </div> */}
                                </div>
                                <div className="bg-slate-300 h-[2px] relative">
                                </div>

                                {/* GST & Address */}
                                <div className={`${gstandaddress == true ? "block" : "hidden"} flex items-start mt-10 space-x-5`}>
                                    <div className="flex flex-col space-y-6 ">
                                        <select name="type" id="" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300">
                                            <option value="None">GST Type</option>
                                            <option value="WholeSaller">WholeSaller</option>
                                            <option value="Retailor">Retailor</option>
                                        </select>
                                        <select name="state" id="" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300">
                                            <option value="None">State</option>
                                            <option value="WholeSaller">Gujarat</option>
                                            <option value="Retailor">Delhi</option>
                                        </select>
                                        <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Pincode" id="" placeholder="Email ID " />
                                    </div>
                                    <div>
                                        <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Pincode" id="" placeholder="Billing Address " />

                                    </div>
                                </div>
                                {/* GST & Address */}

                                {/* Credit & Balance */}
                                <div className={`${creditandbalance == true ? "block" : "hidden"} flex flex-col items-start mt-10`}>
                                    <div className="flex space-x-6 ">
                                        <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Pincode" id="" placeholder="Opening Balance " />
                                        <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Pincode" id="" placeholder="As of Date " />
                                    </div>
                                    <div className="flex items-center space-x-6 mt-10">
                                        <div className="flex items-center space-x-5">
                                            <input type="radio" name="" id="" className="h-5 w-5 cursor-pointer" />
                                            <h1 className="font-medium">To Pay</h1>
                                        </div>
                                        <div className="flex items-center space-x-5">
                                            <input type="radio" name="" id="" className="h-5 w-5 cursor-pointer" />
                                            <h1 className="font-medium">To Receive</h1>
                                        </div>
                                    </div>
                                </div>
                                {/* Credit & Balance */}
                            </div>

                            {/* Business Details */}
                            <div className="flex justify-end mt-20 border-t border-slate-200 space-x-3 ">
                                <button type="submit" className="border border-blue-400 text-blue-500 mt-5 text-sm hover:bg-blue-950 duration-500 font-medium hover:text-white hover:border-blue-950 rounded-md px-8 py-2">
                                    Save & New
                                </button>
                                <button type="submit" className="bg-blue-500 mt-5 hover:bg-blue-950 duration-500 text-sm text-white rounded-md px-8 py-2">
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

export default AddPartyModel;