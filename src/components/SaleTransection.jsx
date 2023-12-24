import { useEffect, useRef, useState, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiFillPrinter } from "react-icons/ai"
import { PiDotsThreeVerticalBold } from "react-icons/pi"
import { AiFillPlusCircle } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"
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



const SalesTransection = () => {

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


    const columns = useMemo(
        () => [
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'Date',
                size: 150,
            },
            {
                accessorKey: 'name.lastName',
                header: 'Invoice Number',
                size: 150,
            },
            {
                accessorKey: 'address', //normal accessorKey
                header: 'Party Name',
                size: 200,
            },
            {
                accessorKey: 'city',
                header: 'Transection Type',
                size: 150,
            },
            {
                accessorKey: 'state',
                header: 'Payment Type',
                size: 150,
            },
            {
                accessorKey: 'state',
                header: 'Amount',
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
            {/* Sale Transection Section Start */}
            <div className=" h-[440px] bg-white shadow-md">
                {/* Search Transection */}
                <div className="w-full flex items-center justify-between mt-3 px-5 py-3">
                    <h1 className="text-black uppercase text-sm font-medium">
                        Transection
                    </h1>
                    <NavLink
                        to="/Sales/SaleInvoice/SaleInvoiceForm">
                        <div
                            className="bg-blue-500 rounded-md text-white flex px-3 cursor-pointer items-center py-1">
                            <AiFillPlusCircle className="text-lg mr-1" />
                            Add Sales
                        </div>
                    </NavLink>
                </div>
                {/* Search Transection */}

                {/* All Transection */}
                <div>
                    <MaterialReactTable table={table} />
                </div>
            </div>
            {/* Sale Transection Section End */}
        </>
    );
};

export default SalesTransection;
