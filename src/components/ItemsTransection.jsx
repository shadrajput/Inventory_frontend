
import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { AiOutlineSearch } from "react-icons/ai"
import { PiDotsThreeVerticalBold } from "react-icons/pi"

const ItemsTransection = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdown = useRef(null);
    const trigger = useRef(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });


    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    function CanselInvoice() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't cancel invoice this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Canceled!",
                    text: "Your file has been canceled.",
                    icon: "success"
                });
            }
        });

    }


    return (
        <>
            <div className=" h-[440px] bg-white shadow-md">

                {/* Search Transection */}
                <div className="w-full mt-3 px-5 py-3">
                    <div className="flex items-center justify-between">
                        <h1 className="text-black uppercase text-sm font-medium">
                            Transection
                        </h1>
                        <div className="flex items-center ">
                            <div className="flex items-center border-2 rounded-sm border-slate-200 py-1 px-2 mr-7">
                                <div>
                                    <AiOutlineSearch className="text-lg" />
                                </div>
                                <input type="search" name="search" id="" className="focus:outline-none text-black ml-2" />
                            </div>
                            <div className="w-4 ">
                                <img src="/exel.png" alt="exel" srcset="" className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Search Transection */}

                {/* All Transection */}
                <div>
                    <table className=" w-full mt-4 relative">
                        <thead className="flex justify-between items-center w-full">
                            <tr className="uppercase text-[12px] w-40 font-medium border  border-slate-200 h-10 pl-4">

                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-1/2 border-slate-200 py-2 pl-4">
                                type
                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-1/2 border-slate-200 py-2 pl-4">
                                Invoice/Ref
                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-1/2 border-slate-200 py-2 pl-4">
                                Name
                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-1/2 border-slate-200 py-2 pl-4">
                                Date
                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-1/2 border-slate-200 py-2 pl-4">
                                Quantity
                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-1/2 border-slate-200 py-2 pl-4">
                                Price/Unit
                            </tr>
                            <tr className="uppercase text-[12px] font-medium border w-1/2 border-slate-200 py-2 pl-4">
                                Status
                            </tr>
                            <tr className="uppercase text-[12px] w-40 font-medium border border-slate-200 py-2 pl-4">
                                Act
                            </tr>
                        </thead>
                        <tbody className="flex justify-between hover:bg-slate-200 cursor-pointer items-center w-full bg-blue-100">
                            <td className="uppercase text-[12px] w-40 font-medium border-r border-slate-300 py-2 pl-4">
                                <div className="bg-green-600 w-2 h-2 rounded-full">

                                </div>
                            </td>
                            <td className="uppercase text-[12px] font-medium border-r w-1/2 border-slate-300 py-2 pl-4">
                                Sale
                            </td>
                            <td className="uppercase text-[12px] font-medium border-r w-1/2 border-slate-300 py-2 pl-4">
                                1
                            </td>
                            <td className="uppercase text-[12px] font-medium border-r w-1/2 border-slate-300 py-2 pl-4">
                                Temp
                            </td>
                            <td className="uppercase text-[12px] font-medium border-r w-1/2 border-slate-300 py-2 pl-4">
                                21/10/2023
                            </td>
                            <td className="uppercase text-end text-[12px] font-medium border-r w-1/2 border-slate-300 py-2 pl-4">
                                <div className="flex items-end justify-end mr-2 ">
                                    <h1>0.00</h1>
                                </div>
                            </td>
                            <td className="uppercase text-end text-[12px] font-medium border-r w-1/2 border-slate-300 py-2 pl-4">
                                <div className="flex items-end justify-end mr-2 ">
                                    <h1>0.00</h1>
                                </div>
                            </td>
                            <td className="uppercase text-[12px] font-medium border-r w-1/2 border-slate-300 py-2 pl-4">
                                Pending
                            </td>
                            <td
                                ref={trigger}
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="uppercase cursor-pointer w-40 font-medium border-r  border-slate-200 py-2 pl-4">
                                <PiDotsThreeVerticalBold />
                            </td>
                        </tbody>
                        <div
                            ref={dropdown}
                            onFocus={() => setDropdownOpen(true)}
                            onBlur={() => setDropdownOpen(false)}
                            className={`absolute right-0 flex flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="flex flex-col gap-5 border-b border-stroke px-4 py-2 dark:border-strokedark">
                                <li className="flex items-center gap-3.5 text-sm cursor-pointer  duration-300 ease-in-out hover:text-primary"
                                >
                                    View / Edit
                                </li>
                                <li className="flex items-center gap-3.5 text-sm cursor-pointer  duration-300 ease-in-out hover:text-primary"
                                >
                                    Cansel Invoice
                                </li>
                                <li className="flex items-center gap-3.5 text-sm cursor-pointer  duration-300 ease-in-out hover:text-primary"
                                >
                                    Delete
                                </li>
                                <li className="flex items-center gap-3.5 text-sm cursor-pointer  duration-300 ease-in-out hover:text-primary"
                                >
                                    Duplicate
                                </li>
                                <li className="flex items-center gap-3.5 text-sm cursor-pointer  duration-300 ease-in-out hover:text-primary"
                                >
                                    Open PDF
                                </li>
                                <li className="flex items-center gap-3.5 text-sm cursor-pointer  duration-300 ease-in-out hover:text-primary"
                                >
                                    Preview
                                </li>
                                <li className="flex items-center gap-3.5 text-sm cursor-pointer  duration-300 ease-in-out hover:text-primary"
                                >
                                    Print
                                </li>
                                <li className="flex items-center gap-3.5 text-sm cursor-pointer  duration-300 ease-in-out hover:text-primary"
                                >
                                    Preview As Dilevery Challan
                                </li>
                                <li className="flex items-center gap-3.5 text-sm cursor-pointer  duration-300 ease-in-out hover:text-primary"
                                >
                                    Convert To Return
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Dropdown End --> */}
                    </table>
                </div>
                {/* All Transection */}

            </div>
        </>
    );
};

export default ItemsTransection;
