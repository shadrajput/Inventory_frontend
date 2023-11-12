import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai"
import { HiPlusSm } from "react-icons/hi"
import ItemsDetails from '../components/ItemsDetails';
import ItemsTransection from '../components/ItemsTransection';
import { PiDotsThreeVerticalBold } from "react-icons/pi"
import AddItemsForm from "../components/AddItemsForm";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const Profile = () => {
  const [AddItems, setAddItems] = useState(false);
  const [Search, setSearch] = useState(false);
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

     // Delete Invoice Funcation
     function DeleteItems() {
      Swal.fire({
          title: "Are you sure?",
          text: "You won't delete item this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
      }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
              });
          }
      });

  }

  return (
    <>
      <div className='flex flex-col items-start  h-full p-3'>
        <div className={`${AddItems == true ? "hidden" : "flex"} w-full space-x-3`}>
          <div className='w-[30%]'>
            <div className="h-full w-full shadow-3 bg-white pt-5">
              {/* Search And Add Party */}
              <div className="flex items-center justify-between px-3">
                <div onClick={() => setSearch(true)} className={`${Search == true ? "hidden" : "block"} py-3 px-3 bg-bodydark1 rounded-full cursor-pointer`}>
                  <AiOutlineSearch className="text-black text-lg" />
                </div>
                <div className={`${Search == true ? "flex" : "hidden"} flex items-center border border-slate-200 rounded-sm px-2 py-[2px]`}>
                  <AiOutlineSearch />
                  <input type="text" className="focus:outline-none px-2" />
                </div>
                <div onClick={() => setAddItems(true)}
                  className="bg-warning flex items-center h-9 hover:bg-amber-400 hover:shadow-md rounded-md cursor-pointer pl-4 ">
                  <HiPlusSm className="text-white text-xl" />
                  <h1 className="text-white text-sm font-semibold pr-4">Add Items</h1>
                  {/* <div className="bg-amber-600 h-9 flex justify-center items-center px-3 rounded-r-md">
                            <AiOutlineDown className="text-white" />
                        </div> */}
                </div>
              </div>
              {/* Search And Add Party */}

              {/* Parties */}
              <div className="pt-5">
                <div className="flex items-center justify-between px-2">
                  <div className="w-full cursor-pointer py-2.5 px-1">
                    <h1 className="uppercase text-xs font-medium ">Party</h1>
                  </div>
                  <div className="w-full cursor-pointer flex justify-end py-2.5">

                    <h1 className="uppercase text-xs font-medium ">Amount</h1>
                  </div>
                </div>
                <div className="flex items-center bg-blue-100 hover:bg-slate-200 relative">
                  <div className="flex items-center cursor-pointer w-full justify-between py-1 px-2 ">
                    <div className="w-full py-2 px-1">
                      <h1 className=" text-sm ">Temp</h1>
                    </div>
                    <div className="w-full flex justify-end py-2">

                      <h1 className=" text-sm text-meta-3 ">0.00</h1>
                    </div>
                  </div>
                  <div ref={trigger}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="cursor-pointer text-black ">
                    <PiDotsThreeVerticalBold className="text-lg" />
                  </div>

                  {/* <!-- Dropdown Start --> */}
                  <div
                    ref={dropdown}
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setDropdownOpen(false)}
                    className={`absolute right-0 mt-4 flex flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? 'block' : 'hidden'
                      }`}
                  >
                    <ul className="flex flex-col gap-5 border-b border-stroke px-4 py-2 dark:border-strokedark">
                      <li onClick={() => setAddItems(true)}
                        className="flex items-center gap-3.5 text-sm cursor-pointer  duration-300 ease-in-out hover:text-primary"
                      >
                        View / Edit
                      </li>
                      <li onClick={DeleteItems}
                        className="flex items-center gap-3.5 text-sm cursor-pointer  duration-300 ease-in-out hover:text-primary"
                      >
                        Delete
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Dropdown End --> */}
                </div>

              </div>
              {/* Parties */}
            </div>
          </div>
          <div className='w-[70%]'>
            <ItemsDetails />
            <ItemsTransection />
          </div>
        </div>

        {
          AddItems == true ?
            <AddItemsForm
              showModal={AddItems}
              handleShowModal={setAddItems}
            // PhoneDetails={PhoneDetails}
            // is_Edit={is_Edit}
            />
            :
            ""
        }
      </div>


    </>
  );
};

export default Profile;
