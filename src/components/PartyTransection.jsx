
import { useEffect, useRef, useState, useMemo } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import AddPartyModel from './AddPartyModel';
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


const PartiesTransection = () => {
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
            <div className=" h-[440px] bg-white shadow-lg">

                {/* Search Transection */}
                <div className="w-full mt-3 px-3 py-3">
                    <div className="flex items-center justify-between">
                        <h1 className="text-black uppercase text-sm font-medium">
                            Transection
                        </h1>
                    </div>
                </div>
                {/* Search Transection */}

                {/* All Transection */}
                <div>
                    <MaterialReactTable table={table} />
                </div>
                {/* All Transection */}

            </div>

            <AddPartyModel
                showModal={AddParty}
                handleShowModal={setAddParty}
            // PhoneDetails={PhoneDetails}
            // is_Edit={is_Edit}

            />
        </>
    );
};

export default PartiesTransection;
