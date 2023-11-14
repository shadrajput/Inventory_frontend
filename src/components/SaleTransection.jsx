import { React, useState } from "react"
import { NavLink, useLocation } from 'react-router-dom';
import { AiFillPrinter } from "react-icons/ai"
import { PiDotsThreeVerticalBold } from "react-icons/pi"
import { AiFillPlusCircle } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"


const SalesTransection = () => {
    return (
        <>
            {/* Sale Transection Section Start */}
            <div className=" h-[440px] bg-white shadow-md">
                {/* Search Transection */}
                <div className="w-full mt-3 px-5 py-3">
                    <h1 className="text-black uppercase text-sm font-medium">
                        Transection
                    </h1>
                    <div className="flex mt-3 w-full items-center justify-between">
                        <div className="flex items-center ">
                            <div className="flex items-center border-2 rounded-sm border-slate-200 py-1 px-2 mr-7">
                                <div>
                                    <AiOutlineSearch className="text-lg" />
                                </div>
                                <input type="search" name="search" id="" className="focus:outline-none text-black ml-2" />
                            </div>
                        </div>

                        <NavLink
                            to="/Sales/SaleInvoice">
                            <div
                                className="bg-blue-500 rounded-md text-white flex px-3 cursor-pointer items-center py-1">
                                <AiFillPlusCircle className="text-lg mr-1" />
                                Add Sales
                            </div>
                        </NavLink>
                    </div>
                </div>
                {/* Search Transection */}

                {/* All Transection */}
                <div>
                    <table className=" w-full mt-2">
                        <thead className="flex justify-between items-center w-full">
                            <tr className="uppercase text-[12px] font-medium border w-full border-slate-200 py-2 pl-4">
                                Date
                            </tr>
                            <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
                                Invoice No
                            </tr>
                            <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
                                party name
                            </tr>
                            <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
                                transection type
                            </tr>
                            <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
                                payment type
                            </tr>
                            <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
                                amount
                            </tr>
                            <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
                                balance
                            </tr>
                            <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
                                Act
                            </tr>
                        </thead>
                        <tbody className="flex justify-between items-center w-full bg-blue-100">
                            <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                25/09/2021
                            </td>
                            <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                1
                            </td>
                            <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                Temp
                            </td>
                            <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                Sale
                            </td>
                            <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                Cash
                            </td>
                            <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                0
                            </td>
                            <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                0
                            </td>
                            <td className="uppercase flex items-center space-x-3 cursor-pointer font-medium border-r w-full border-slate-200 py-2 pl-4">
                                <AiFillPrinter className="text-xl text-blue-950" />
                                <PiDotsThreeVerticalBold className="text-blue-950" />
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Sale Transection Section End */}
        </>
    );
};

export default SalesTransection;
