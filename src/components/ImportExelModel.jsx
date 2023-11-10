import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../Models";
import { useFormik } from "formik";
import "../Css/ImageUploadCss.css"

function ImportExelModel({ showModal, handleShowModal, PhoneDetails, is_Edit }) {


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
            <Modal.Description className="inline-block w-[65%] ml-52 p-7 bg-white my-8 text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
                <Modal.Title
                    as="h3"
                    className="mb-10 text-lg font-semibold text-blue-950">
                    {
                        is_Edit == true ?
                            ""
                            :
                            "Import Exel"
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
                    <div className=" px-10 my-5 flex items-center justify-between space-x-10 ">
                        <div className="w-1/3 flex flex-col justify-center items-center">
                            <p className="text-center">Download .xls/.xlsx (excel sheet)
                                template file to enter Data
                            </p>
                            <div className="w-32 py-14">
                                <img src="xls.png" alt="" srcset="" />
                            </div>
                            <div>
                                <button className="bg-blue-500 text-white hover:shadow-md px-10 py-2 rounded-md">
                                    Download
                                </button>
                            </div>
                        </div>

                        <div className="w-2/4">
                            <p className="text-center">Upload your .xls/ .xlsx (excel sheet)</p>

                            <div className="border flex-col text-sm bg-slate-100 border-slate-400 text-center my-10 h-52 flex justify-center items-center">
                                <div className="flex items-center">
                                    <p>Drag and drop or</p>
                                    <span className="text-blue-500 cursor-pointer px-2">Click here to Browse</span>
                                </div>
                                <p>formatted excel file to continue</p>
                            </div>
                        </div>
                    </div>
                </Modal.Description>
            </Modal.Description>
        </Modal>
    );
}

export default ImportExelModel;