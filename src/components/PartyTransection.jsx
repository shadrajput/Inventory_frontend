
import { AiOutlineSearch } from "react-icons/ai"
import { PiDotsThreeVerticalBold } from "react-icons/pi"

const PartiesTransection = () => {
    return (
        <>
            <div className=" h-[440px] bg-white shadow-lg">

                {/* Search Transection */}
                <div className="w-full mt-3 px-3 py-3">
                    <div className="flex items-center justify-between">
                        <h1 className="text-black uppercase text-sm font-medium">
                            Transection
                        </h1>
                        <div className="flex items-center border-2 rounded-sm border-slate-200 py-1 px-2">
                            <div>
                                <AiOutlineSearch className="text-lg" />
                            </div>
                            <input type="search" name="search" id="" className="focus:outline-none text-black ml-2" />
                        </div>
                    </div>
                </div>
                {/* Search Transection */}

                {/* All Transection */}
                <div>
                    <table className=" w-full mt-4">
                        <thead className="flex justify-between items-center w-full">
                            <tr className="uppercase text-[12px] font-medium border w-full border-slate-200 h-10 pl-4">
                                
                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-full border-slate-200 py-2 pl-4">
                                type
                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-full border-slate-200 py-2 pl-4">
                                number
                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-full border-slate-200 py-2 pl-4">
                                date
                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-full border-slate-200 py-2 pl-4">
                                total
                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-full border-slate-200 py-2 pl-4">
                                balance
                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-full border-slate-200 py-2 pl-4">
                                Act
                            </tr>
                        </thead>
                        <tbody className="flex justify-between items-center w-full bg-blue-100">
                            <td className="uppercase text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                <div className="bg-green-600 w-2 h-2 rounded-full">
                                    
                                </div>
                            </td>
                            <td className="uppercase text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                type
                            </td>
                            <td className="uppercase text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                number
                            </td>
                            <td className="uppercase text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                date
                            </td>
                            <td className="uppercase text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                total
                            </td>
                            <td className="uppercase text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
                                balance
                            </td>
                            <td className="uppercase cursor-pointer font-medium border-r w-full border-slate-200 py-2 pl-4">
                                <PiDotsThreeVerticalBold/>
                            </td>
                        </tbody>
                    </table>
                </div>
                {/* All Transection */}

            </div>
        </>
    );
};

export default PartiesTransection;
