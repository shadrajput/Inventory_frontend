import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../Models";
import { useFormik } from "formik";
import "../Css/ImageUploadCss.css"

function MyCompanyDetailsModel({ showModal, handleShowModal, PhoneDetails, is_Edit }) {
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
      <Modal.Description className="inline-block w-2/5 bg-white p-6 my-8 text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
        <Modal.Title
          as="h3"
          className="mb-4 text-xl font-medium text-white">
          {
            is_Edit == true ?
              "Update Model"
              :
              "Add Model"
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
          <div className="px-4 py-4">
            <form action="">
              <div className="flex items-center">
                <div className="md:col-span-1 md:flex justify-center md:justify-center items-center w-1/2 ">
                  <div className="profile_img_div flex justify-center rounded-md items-center border-2 border-gray-500 shadow-lg">
                    <img
                      src=""
                      width="100%"
                      height="100%"
                      className="object-contain"
                      alt="Add Logo"
                    />
                    <div className="profile_img_overlay absolute flex flex-col justify-center items-center">
                      <input
                        type="file"
                        id="adhar_front"
                        className="rounded-md w-16"
                        accept=".png, .jpg, .jpeg"
                        name="adhar_front"
                        onChange={(e) => handleAdharFUpload(e)}
                        onInput={(e) => handleAdharFUpload(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-6">
                  <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Name" id="" placeholder="Business Name *" />
                  <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="GSTIN" id="" placeholder="GSTIN " />
                  <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Phone NO" id="" placeholder="Phone NO " />
                  <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Email ID" id="" placeholder="Email ID " />
                </div>
              </div>

              {/* Business Details */}
              <div className="mt-5">
                <h1 className="text-blue-500 ml-2  font-semibold">Business Details</h1>
                <div className="bg-slate-300 h-[2px] mt-2 relative">
                  <div className="bg-blue-500 h-1 absolute w-40 bottom-[.1px] ">

                  </div>
                </div>
              </div>
              <div className="flex items-center mt-10 space-x-5">
                <div className="flex flex-col space-y-6 ">
                  <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Address" id="" placeholder="Business Address " />
                  <select name="state" id="" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300">
                    <option value="None">None</option>
                    <option value="WholeSaller">Gujarat</option>
                    <option value="Retailor">Delhi</option>
                  </select>
                  <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Pincode" id="" placeholder="Pincode " />
                </div>
                <div className="flex flex-col space-y-6 ">
                  <select name="type" id="" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300">
                    <option value="None">None</option>
                    <option value="WholeSaller">WholeSaller</option>
                    <option value="Retailor">Retailor</option>
                  </select>
                  <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Category" id="" placeholder="Business Category " />
                  <input type="text" className="h-9 pl-2 focus:outline-blue-500 w-60 border rounded-md border-slate-300" name="Description" id="" placeholder="Business Description " />
                </div>
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

export default MyCompanyDetailsModel;