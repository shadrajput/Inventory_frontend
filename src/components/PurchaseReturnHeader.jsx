import { MdOutlineCurrencyRupee } from "react-icons/md"
import { BsGraphUp } from "react-icons/bs"
import { FiPrinter } from "react-icons/fi"


const PurchaseReturnHeader = () => {
    return (
        <>
            <div className="bg-white h-29 shadow-md flex justify-between items-start pt-5 px-3">
                <div className="left">
                    {/*  Filter For Sales */}
                    <div className="flex items-center space-x-4">

                        {/* Select Option */}
                        <div>
                            <select name="" id="" className=" h-9  w-full text-slate-900 font-semibold ">
                                <option value="This Month">This Month</option>
                                <option value="All Sales Invoice">All Sales Invoice</option>
                                <option value="Last Month">Last Month</option>
                                <option value="This quater">This quater</option>
                                <option value="This Year">This Year</option>
                                <option value="Custom">Custom</option>
                            </select>
                        </div>
                        {/* Select Option */}

                        {/* Date Filter  */}

                        <div className="flex items-center border border-slate-200 h-8  rounded-l-sm">
                            <div className="bg-slate-400 px-3 h-8 flex justify-center items-center ">
                                <h1 className="text-xs font-semibold text-white">Between</h1>
                            </div>
                            <div className="flex items-center space-x-3 p-1 ">
                                <div>
                                    <input type="date" className="text-slate-900 bg-transparent font-medium text-[13px]" />
                                </div>
                                <h1 className="text-xs font-medium">TO</h1>
                                <div>
                                    <input type="date" className="text-slate-900 bg-transparent font-medium text-[13px]" />
                                </div>
                            </div>
                        </div>

                        {/* Date Filter  */}

                        {/* All Firm and My Company Filter */}

                        <div>
                            <select name="" id="" className="border h-8 rounded-sm border-slate-200 text-slate-900 font-medium text-sm ">
                                <option value="All Firms">All Firms</option>
                                <option value="My Company">My Company</option>
                            </select>
                        </div>

                        {/* All Firm and My Company Filter */}

                    </div>
                    {/*  Filter For Sales */}

                    {/* Paid and paidup sales */}
                    <div className="flex items-center space-x-10 mt-3 w-40">
                        <select name="" id="" className=" h-7  w-full text-slate-900 font-medium text-sm border border-slate-200 rounded-md ">
                            <option value="This Month">This Month</option>
                            <option value="All Sales Invoice">All Sales Invoice</option>
                            <option value="Last Month">Last Month</option>
                            <option value="This quater">This quater</option>
                            <option value="This Year">This Year</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </div>
                    {/* Paid and paidup sales */}
                </div>

                <div className="right flex items-center justify-end space-x-7  w-60 mr-2">
                    <div className="flex-col justify-center items-center">
                        <BsGraphUp className="ml-2" />
                        <h1 className="text-xs font-semibold text-[#314259] mt-3 ">Graph</h1>
                    </div>
                    <div className="flex-col justify-center items-center">
                        <div className="w-4 ml-5">
                            <img src="/exel.png" alt="exel" srcset="" className="cursor-pointer" />
                        </div>
                        <h1 className="text-xs font-semibold text-[#314259] mt-3 ">Exel Report</h1>
                    </div>
                    <div className="flex-col justify-center items-center">
                        <FiPrinter className="ml-1" />
                        <h1 className="text-xs font-semibold text-[#314259] mt-3 ">Print</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PurchaseReturnHeader;
