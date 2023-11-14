import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../../Models";
import { useFormik } from "formik";
import { Switch } from 'antd';
import { AiFillSetting } from "react-icons/ai"
import { BsCamera } from "react-icons/bs"
import { BiPlus } from "react-icons/bi"
import SwitcherFour from '../../components/SwitcherFour';


function SaleInvoiceForm
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
            <div className="inline-block w-full bg-white px-2 text-left  transition-all transform bg-gray-700 shadow-xl rounded-lg ">
                <div className="border-b pb-3 border-slate-200 flex items-center">
                    <h1
                        as="h3"
                        className=" text-lg font-semibold text-blue-950">
                        {
                            is_Edit == true ?
                                "Update Model"
                                :
                                "Add Party"
                        }
                    </h1>
                    <div className="flex items-center ml-8 space-x-3">
                        <h1 className="font-semibold text-sm">Product</h1>
                        <div>
                            <SwitcherFour />
                        </div>
                        <h1 className="font-semibold text-sm">Service</h1>
                    </div>
                    <div className="absolute top-6 right-2.5 flex items-center space-x-3">
                        <AiFillSetting className="text-lg cursor-pointer" />
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
                    </div>
                </div>
                <div className="px-4 mt-8 ">
                    <form action="">
                        <div className="space-y-5">
                            <div className="flex space-x-6">
                                <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Name" id="" placeholder="Item Name *" />
                                <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="GSTIN" id="" placeholder="Item HSN " />
                                <button className="bg-blue-200 text-blue-500 px-5 py-2 rounded-md font-medium text-sm">
                                    Select Unit
                                </button>
                            </div>
                            <div className="flex space-x-6">
                                <select name="category" id="" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300">
                                    <option value="">Category</option>
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                    <option value="Medical">Medical</option>
                                </select>
                                <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="GSTIN" id="" placeholder="Item Code " />
                                <div className="flex items-center space-x-3 cursor-pointer ">
                                    <BsCamera className="text-xl text-blue-500" />
                                    <h1 className="text-blue-500 text-[15px]">Add Item Image</h1>
                                </div>
                            </div>
                        </div>
                        {/* Business Details */}
                        <div className="mt-10">
                            <div className="flex items-center space-x-10">
                                <div className="flex flex-col" onClick={GstandAddress}>
                                    <h1 className={`${gstandaddress == true ? "text-red-500" : "text-slate-400"} ml-2 cursor-pointer mb-2  font-semibold`}>Pricing</h1>
                                    <div className={`${gstandaddress == true ? "block" : "hidden"} bg-red-500 h-1 w-36`}>

                                    </div>
                                </div>
                                <div className="flex flex-col" onClick={CreditandBalance}>
                                    <h1 className={`${creditandbalance == true ? "text-red-500" : "text-slate-400"} ml-2 cursor-pointer mb-2  font-semibold`}>Stock</h1>
                                    <div className={`${creditandbalance == true ? "block" : "hidden"} bg-red-500 h-1 w-36`}>

                                    </div>
                                </div>
                                {/* <div className="flex flex-col">
                                        <h1 className="text-blue-500 ml-2 cursor-pointer mb-2  font-semibold">Additional Fields</h1>
                                        <div className="bg-blue-500 h-1 w-36 hidden  ">

                                        </div>
                                    </div> */}
                            </div>
                            <div className="bg-red-50 h-[2px] relative">
                            </div>

                            {/* Pricing */}
                            <div className={`${gstandaddress == true ? "block" : "hidden"} flex flex-col items-start mt-10 space-y-10`}>
                                {/* Sale Price */}
                                <div className="">
                                    <h1 className="font-medium text-black">Sale Price</h1>
                                    <div className="flex items-center space-x-10">
                                        <div className="flex items-center my-5 ">
                                            <input type="text" className="focus:outline-none border h-10 w-32 px-2 text-sm font-medium rounded-sm border-slate-200" placeholder="Sale Price" />
                                            <select name="" id="" className="border h-10 w-32 px-2 font-medium text-black text-sm focus:outline-none rounded-sm border-slate-200">
                                                <option value="Without Tax">Without Tax</option>
                                                <option value="Without Tax">Without Tax</option>
                                            </select>
                                        </div>
                                        <div className="flex items-center my-5 ">
                                            <input type="text" className="focus:outline-none border h-10 w-40 px-2 text-sm font-medium rounded-sm border-slate-200" placeholder="Dis. On Sale Price.." />
                                            <select name="" id="" className="border h-10 w-32 px-2 font-medium text-black text-sm focus:outline-none rounded-sm border-slate-200">
                                                <option value="Without Tax">Without Tax</option>
                                                <option value="Without Tax">Without Tax</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3 cursor-pointer">
                                        <BiPlus className="text-blue-500 text-xl" />
                                        <h1 className="text-blue-500 font-medium">Add Wholesale Price</h1>
                                    </div>
                                </div>
                                {/* Sale Price */}

                                {/* Purchase Price */}
                                <div className="">
                                    <h1 className="font-medium text-black">Sale Price</h1>
                                    <div className="flex items-center space-x-10">
                                        <div className="flex items-center my-5 ">
                                            <input type="text" className="focus:outline-none border h-10 w-32 px-2 text-sm font-medium rounded-sm border-slate-200" placeholder="Sale Price" />
                                            <select name="" id="" className="border h-10 w-32 px-2 font-medium text-black text-sm focus:outline-none rounded-sm border-slate-200">
                                                <option value="Without Tax">Without Tax</option>
                                                <option value="Without Tax">Without Tax</option>
                                            </select>
                                        </div>
                                        <div className="flex items-center my-5 ">
                                            <input type="text" className="focus:outline-none border h-10 w-40 px-2 text-sm font-medium rounded-sm border-slate-200" placeholder="Dis. On Sale Price.." />
                                            <select name="" id="" className="border h-10 w-32 px-2 font-medium text-black text-sm focus:outline-none rounded-sm border-slate-200">
                                                <option value="Without Tax">Without Tax</option>
                                                <option value="Without Tax">Without Tax</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Purchase Price */}

                            </div>
                            {/* Pricing */}

                            {/* Stock */}
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
                            {/* Stock */}
                        </div>

                        {/* Business Details */}
                        <div className="flex justify-end mt-10 border-t border-slate-200 space-x-3 ">
                            <button type="submit" className="border border-blue-400 text-blue-500 mt-5 text-sm hover:bg-blue-950 duration-500 font-medium hover:text-white hover:border-blue-950 rounded-md px-8 py-2">
                                Save & New
                            </button>
                            <button type="submit" className="bg-blue-500 mt-5 hover:bg-blue-950 duration-500 text-sm text-white rounded-md px-8 py-2">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SaleInvoiceForm;