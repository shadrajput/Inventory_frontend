import React, { useState } from "react";
import { Modal } from "../Models";


function SalePrintOption({ showModal, handleShowModal, PhoneDetails, is_Edit }) {

    const handleModalClose = () => {
        handleShowModal(false);
    };

    if (!showModal) {
        return <></>;
    }

    return (
        <Modal open={showModal}
            onClose={handleModalClose}
        >
            <Modal.Description className="inline-block w-70 bg-white p-6 my-8 text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
                <Modal.Title
                    as="h3"
                    className="mb-5 text-lg font-semibold text-blue-950">
                    {
                        is_Edit == true ?
                            "Update Model"
                            :
                            "Print Option"
                    }
                </Modal.Title>

                <Modal.Description>
                    <div className="">
                        <ul>
                            <li className="hover:bg-slate-100 py-2 px-2 flex justify-between">
                                <label htmlFor="ItemDetails" className="text-black">Print Item Details</label>
                                <input type="checkbox" name="" id="" className="h-5 w-5 cursor-pointer" />
                            </li>
                            <li className="hover:bg-slate-100 py-2 px-2 flex justify-between">
                                <label htmlFor="ItemDetails" className="text-black">Print Description</label>
                                <input type="checkbox" name="" id="" className="h-5 w-5 cursor-pointer" />
                            </li>
                            <li className="hover:bg-slate-100 py-2 px-2 flex justify-between">
                                <label htmlFor="ItemDetails" className="text-black">Print Payment Status</label>
                                <input type="checkbox" name="" id="" className="h-5 w-5 cursor-pointer" />
                            </li>
                            <li className="hover:bg-slate-100 py-2 px-2 flex justify-between">
                                <label htmlFor="ItemDetails" className="text-black">Print Order Number</label>
                                <input type="checkbox" name="" id="" className="h-5 w-5 cursor-pointer" />
                            </li>
                            <li className="hover:bg-slate-100 py-2 px-2 flex justify-between">
                                <label htmlFor="ItemDetails" className="text-black">Print Party's Phone No</label>
                                <input type="checkbox" name="" id="" className="h-5 w-5 cursor-pointer" />
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-end pt-4 space-x-5">
                        <button className="text-blue-500">Cancel</button>
                        <button className="text-blue-500">OK</button>
                    </div>
                </Modal.Description>
            </Modal.Description>
        </Modal>
    );
}

export default SalePrintOption;