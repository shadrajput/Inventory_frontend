import { BiPlus } from "react-icons/bi"
import { NavLink, useLocation } from 'react-router-dom';


const SalesOrder = () => {
    return (
        <>
            <div className="shadow-md m-5 bg-white">
                <div className="flex justify-between items-center px-5 py-5">
                    <h1 className="uppercase text-black font-medium">Transection</h1>

                    <NavLink
                        to="/Sales/SalesOrder/AddSalesOrderForm">
                        <div className="bg-blue-500 cursor-pointer px-3 py-1 flex rounded-md items-center space-x-2">
                            <BiPlus className="text-white text-2xl" />
                            <h1 className="text-white font-medium">Add Sale Order</h1>
                        </div>
                    </NavLink>

                </div>
            </div>
        </>
    );
};

export default SalesOrder;
