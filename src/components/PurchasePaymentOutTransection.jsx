import { useEffect, useRef, useState, useMemo } from 'react';
import { AiFillPlusCircle } from "react-icons/ai"
import AddPaymentOutModel from "./AddPaymentOutModel copy"
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


const PurchasePaymentOutTransection = () => {
    const [AddPaymentOut, setAddPaymentOut] = useState(false);
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
            <div className=" h-[440px] bg-white shadow-md">

                {/* Search Transection */}
                <div className="w-full mt-3 px-5 py-3">
                    <div className="flex mt-3 w-full items-center justify-between">
                        <div className="flex items-center ">
                            <h1 className="text-black uppercase text-sm font-medium">
                                Transection
                            </h1>
                        </div>

                        <div onClick={() => setAddPaymentOut(true)}
                            className="bg-blue-500 rounded-md text-white flex px-3 cursor-pointer items-center py-1">
                            <AiFillPlusCircle className="text-lg mr-1" />
                            Add Payment Out
                        </div>
                    </div>
                </div>
                {/* Search Transection */}

                {/* All Transection */}
                <div>
                    <MaterialReactTable table={table} />
                </div>
                {/* All Transection */}

            </div>

            <AddPaymentOutModel
                showModal={AddPaymentOut}
                handleShowModal={setAddPaymentOut}
            // PhoneDetails={PhoneDetails}
            // is_Edit={is_Edit}
            />
        </>
    );
};

export default PurchasePaymentOutTransection;
