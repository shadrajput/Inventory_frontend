import { BiSolidContact } from "react-icons/bi"
import { AiOutlineRight } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"
import { HiPlusSm } from "react-icons/hi"
import { AiOutlineDown } from "react-icons/ai"
import { PiDotsThreeVerticalBold } from "react-icons/pi"

const AddandSearchItems = () => {
    return (
        <>
            <div className="h-[570px] w-full shadow-3 bg-white">
            
                {/* Add Partiy Using Mobile Number or Gmail */}
                {/* <div className="px-3 pt-3 pb-6 cursor-pointer ">
                    <div className="p-4 flex items-start shadow-2">
                        <div className="rounded-full bg-red-100 py-2 px-2 flex justify-center items-center">
                            <BiSolidContact className="text-red-600 text-lg" />
                        </div>
                        <div className="flex items-center justify-between ">
                            <div className="pl-5">
                                <h1 className="font-semibold text-black">Import Parties</h1>
                                <p className="text-xs">Use contacts from your Phone or Gmail to create parties.
                                </p>
                            </div>
                            <div className="flex justify-center items-center text-primary ">
                                <AiOutlineRight className="text-lg" />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Add Partiy Using Mobile Number or Gmail */}

                {/* Search And Add Party */}
                <div className="flex items-center justify-between px-3 pt-5">
                    <div className="py-3 px-3 bg-bodydark1 rounded-full">
                        <AiOutlineSearch className="text-black text-lg" />
                    </div>
                    <div className="bg-warning flex items-center h-9 hover:bg-amber-400 hover:shadow-md rounded-md cursor-pointer pl-4 ">
                        <HiPlusSm className="text-white text-xl" />
                        <h1 className="text-white text-sm font-semibold pr-4">Add Item</h1>
                        <div className="bg-amber-600 h-9 flex justify-center items-center px-3 rounded-r-md">
                            <AiOutlineDown className="text-white" />
                        </div>
                    </div>
                </div>
                {/* Search And Add Party */}

                {/* Parties */}
                <div className="pt-5">
                    <div className="flex items-center justify-between px-2">
                        <div className="w-full cursor-pointer py-2.5 px-1">
                            <h1 className="uppercase text-xs font-medium ">Item</h1>
                        </div>
                        <div className="w-full cursor-pointer flex justify-end py-2.5">

                            <h1 className="uppercase text-xs font-medium ">quantity</h1>
                        </div>
                    </div>
                    <div className="flex items-center bg-blue-100 hover:bg-slate-200">
                        <div className="flex items-center cursor-pointer w-full justify-between py-1 px-2 ">
                            <div className="w-full py-2 px-1">
                                <h1 className=" text-sm ">Temp</h1>
                            </div>
                            <div className="w-full flex justify-end py-2">

                                <h1 className=" text-sm text-red-500 ">0.00</h1>
                            </div>
                        </div>
                        <div className="cursor-pointer text-black ">
                            <PiDotsThreeVerticalBold className="text-lg"/>
                        </div>
                    </div>

                </div>
                {/* Parties */}
            </div>
        </>
    );
};

export default AddandSearchItems;
