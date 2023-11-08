import { MdOutlineCurrencyRupee } from "react-icons/md"
import { HiOutlineAdjustments } from "react-icons/hi"


const ItemsDetails = () => {
    return (
        <>
            <div className="bg-white shadow-3 w-full px-3 py-3 ">
                <div className="flex justify-between">
                    <h1 className="text-black uppercase text-sm font-medium">
                        Temp
                    </h1>
                    <div className="bg-blue-600 flex items-center space-x-3 h-8 px-3 rounded-md cursor-pointer hover:bg-blue-700">
                        <HiOutlineAdjustments className="text-white" />
                        <h1 className="text-white font-medium text-xs uppercase">adjust item</h1>
                    </div>
                </div>
                <div className="flex justify-between items-center py-2">
                    <div className="flex space-x-1">
                        <h2 className="text-[13px] text-black uppercase">Sale Price : </h2>
                        <p className="text-[13px] text-green-600">15000</p>
                    </div>
                    <div className="flex space-x-1">
                        <h2 className="text-[13px] text-black">STOCK QUANTITY : </h2>
                        <p className="text-[13px] text-red-500">0</p>
                    </div>
                </div>
                <div className="flex justify-between items-center py-1">
                    <div className="flex space-x-1">
                        <h2 className="text-[13px] text-black uppercase">Purchase Price : </h2>
                        <p className="text-[13px] text-green-600">0.00</p>
                    </div>
                    <div className="flex space-x-1">
                        <h2 className="text-[13px] text-black">STOCK VALUE : </h2>
                        <div className="flex items-center">
                            <MdOutlineCurrencyRupee className="text-[13px] text-green-600" />
                            <p className="text-[13px] text-green-600 font-medium">0.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemsDetails;
