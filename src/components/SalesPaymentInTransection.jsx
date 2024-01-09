// import { React, useState } from "react"
// import { AiOutlineSearch } from "react-icons/ai"
// import { PiDotsThreeVerticalBold } from "react-icons/pi"
// import { AiFillPrinter } from "react-icons/ai"
// import AddPaymentInModel from "./AddPaymentInModel"

// const SalesPaymentInTransection = () => {

//     return (
//         <>
//             <div className=" h-[440px] bg-white shadow-md">

//                 {/* Search Transection */}
//                 <div className="w-full mt-3 px-5 py-3">
//                     <div className="flex mt-3 w-full items-center justify-between">
//                         <div className="flex items-center ">
//                             <div className="flex items-center border-2 rounded-sm border-slate-200 py-1 px-2 mr-7">
//                                 <div>
//                                     <AiOutlineSearch className="text-lg" />
//                                 </div>
//                                 <input type="search" name="search" id="" className="focus:outline-none text-black ml-2" />
//                             </div>
//                         </div>

//                        
//                     </div>
//                 </div>
//                 {/* Search Transection */}

//                 {/* All Transection */}
//                 <div>
//                     <table className=" w-full mt-2">
//                         <thead className="flex justify-between items-center w-full">
//                             <tr className="uppercase text-[12px] font-medium border w-full border-slate-200 py-2 pl-4">
//                                 Date
//                             </tr>
//                             <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
//                                 ref No
//                             </tr>
//                             <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
//                                 party name
//                             </tr>
//                             <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
//                                 category name
//                             </tr>
//                             <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
//                                 type
//                             </tr>
//                             <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
//                                 total
//                             </tr>
//                             <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
//                                 recived/paid
//                             </tr>
//                             <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
//                                 balance
//                             </tr>
//                             <tr className="uppercase text-[12px] font-semibold border w-full border-slate-200 py-2 pl-4">
//                                 Act
//                             </tr>
//                         </thead>
//                         <tbody className="flex justify-between items-center w-full bg-blue-100">
//                             <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
//                                 25/09/2021
//                             </td>
//                             <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
//                                 1
//                             </td>
//                             <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
//                                 Temp
//                             </td>
//                             <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
//                                 Sale
//                             </td>
//                             <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
//                                 Cash
//                             </td>
//                             <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
//                                 0
//                             </td>
//                             <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
//                                 yes
//                             </td>
//                             <td className="text-[12px] font-medium border-r w-full border-slate-300 py-2 pl-4">
//                                 0
//                             </td>
//                             <td className="uppercase flex items-center space-x-3 cursor-pointer font-medium border-r w-full border-slate-200 py-2 pl-4">
//                                 <AiFillPrinter className="text-xl text-blue-950" />
//                                 <PiDotsThreeVerticalBold className="text-blue-950" />
//                             </td>
//                         </tbody>
//                     </table>
//                 </div>
//                 {/* All Transection */}

//             </div>

//             <AddPaymentInModel
//                 showModal={AddPaymentIn}
//                 handleShowModal={setAddPaymentIn}
//             // PhoneDetails={PhoneDetails}
//             // is_Edit={is_Edit}
//             />

//         </>
//     );
// };

// export default SalesPaymentInTransection;



import { useEffect, useRef, useState, useMemo } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { AiFillPlusCircle } from "react-icons/ai"
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';

const data = [
    {
        name: {
            firstName: 'John',
            lastName: 'Doe',
        },
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        name: {
            firstName: 'Jane',
            lastName: 'Doe',
        },
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Joe',
            lastName: 'Doe',
        },
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
        },
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
    },
];


const SalesPaymentInTransection = () => {
    const [EditAndDelete, setEditAndDelete] = useState(false);
    const [AddParty, setAddParty] = useState(false);
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

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'Type',
                size: 150,
            },
            {
                accessorKey: 'name.lastName',
                header: 'Number',
                size: 150,
            },
            {
                accessorKey: 'address', //normal accessorKey
                header: 'Date',
                size: 200,
            },
            {
                accessorKey: 'city',
                header: 'Total',
                size: 150,
            },
            {
                accessorKey: 'state',
                header: 'Balance',
                size: 150,
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });


    return (
        <>
            <div className=" h-[400px] bg-white mt-5">
                {/* Search Transection */}
                <div className='flex items-center justify-between w-full px-3'>
                    <div className="w-full mt-3 px-3 py-3">
                        <div className="flex items-center justify-between">
                            <h1 className="text-black uppercase text-sm font-medium">
                                Transection
                            </h1>
                        </div>
                    </div>
                    <div onClick={() => setAddPaymentIn(true)}
                        className="bg-blue-500 rounded-md w-45 text-white flex px-3 cursor-pointer items-center py-1">
                        <AiFillPlusCircle className="text-lg mr-1" />
                        Add Payment In
                    </div>
                </div>
                {/* Search Transection */}

                {/* All Transection */}
                <div>
                    <MaterialReactTable table={table} />
                </div>
                {/* All Transection */}
            </div>
        </>
    );
};

export default SalesPaymentInTransection;

