import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo/logo-icon.png';
import { BiPlus } from "react-icons/bi"
import { AiFillSetting } from "react-icons/ai"
import { AiFillCaretRight } from "react-icons/ai"

const Header = ({
  sidebarOpen,
  setSidebarOpen
}) => {
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
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-5">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!sidebarOpen && '!w-full delay-300'
                    }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!sidebarOpen && 'delay-400 !w-full'
                    }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!sidebarOpen && '!w-full delay-500'
                    }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!sidebarOpen && '!h-0 !delay-[0]'
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!sidebarOpen && '!h-0 !delay-200'
                    }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={Logo} alt="Logo" className="rounded-4" />
          </Link>
        </div>

        <div className="hidden sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <button className="absolute top-1/2 left-0 -translate-y-1/2">
                <svg
                  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                    fill=""
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Enter Your Business N..."
                className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-4">
          {/* Add Sales Button */}
          <NavLink to="/Sales/SaleInvoice/SaleInvoiceForm">
            <div className='bg-red-200 shadow-lg cursor-pointer flex items-center hover:scale-105 text-sm duration-200 text-white rounded-full px-5 space-x-3 h-10 font-semibold'>
              <BiPlus className='text-xl bg-red-500 rounded-full' />
              <button className='text-red-500'>
                Add Sales
              </button>
            </div>
          </NavLink>
          {/* Add Sales Button */}

          {/* Add Purchase Button */}
          <NavLink to="/Purchase/PurchaseInvoice/PurchaseInvoiceFormq">
            <div className='bg-blue-200 shadow-lg cursor-pointer flex items-center hover:scale-105 text-sm duration-200 text-white rounded-full px-5 space-x-3 h-10 font-semibold'>
              <BiPlus className='text-xl bg-blue-500 rounded-full' />
              <button className='text-blue-500'>
                Add Purchase
              </button>
            </div>
          </NavLink>
          {/* Add Purchase Button */}

          {/* Add More Button */}

          <div ref={trigger}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className='bg-white border border-slate-200 shadow-lg cursor-pointer flex items-center hover:scale-105 text-sm duration-200 text-white rounded-full px-5 space-x-3 h-10 font-semibold'>
            <BiPlus className='text-xl bg-blue-500 rounded-full' />
            <button className='text-blue-500'>
              Add More
            </button>
          </div>
          {/* Add More Button */}

          {/* Setting Area */}
          <div className='border-l-2 border-slate-400 '>
            <AiFillSetting className='text-2xl ml-5 cursor-pointer hover:scale-105' />
          </div>
          {/* Setting Area */}

        </div>
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className={`absolute top-20 right-10 w-1/2 px-4 py-5 flex flex-col rounded-sm bg-white shadow-lg border border-slate-200  ${dropdownOpen === true ? 'block' : 'hidden'
            }`}
        >
          <div className='flex items-start justify-between'>
            <div>
              <h1 className='text-black font-semibold uppercase ml-5'>Sale</h1>
              <ul className="flex flex-col mt-3 gap-5 px-4 py-2 dark:border-strokedark">
                <li className="flex items-center py-1 gap-1 text-sm cursor-pointer font-medium text-black duration-300 ease-in-out hover:text-blue-500"
                >
                  <AiFillCaretRight />
                  <p>Sale Invoice</p>
                </li>
                <li className="flex items-center py-1 gap-1 text-sm cursor-pointer font-medium text-black duration-300 ease-in-out hover:text-blue-500"
                >
                  <AiFillCaretRight />
                  <p>Payment In</p>
                </li>
                <li className="flex items-center py-1 gap-1 text-sm cursor-pointer font-medium text-black duration-300 ease-in-out hover:text-blue-500"
                >
                  <AiFillCaretRight />
                  <p>Sale Return</p>
                </li>
                <li className="flex items-center py-1 gap-1 text-sm cursor-pointer font-medium text-black duration-300 ease-in-out hover:text-blue-500"
                >
                  <AiFillCaretRight />
                  <p>Sale Order</p>
                </li>
                <li className="flex items-center py-1 gap-1 text-sm cursor-pointer font-medium text-black duration-300 ease-in-out hover:text-blue-500"
                >
                  <AiFillCaretRight />
                  <p>Delivery Challan</p>
                </li>
              </ul>
            </div>
            <div>
              <h1 className='text-black font-semibold uppercase ml-5'>Purchase</h1>
              <ul className="flex flex-col mt-3 gap-5 px-4 py-2 dark:border-strokedark">
                <li className="flex items-center py-1 gap-1 text-sm cursor-pointer font-medium text-black duration-300 ease-in-out hover:text-blue-500"
                >
                  <AiFillCaretRight />
                  <p>Purchase Bill</p>
                </li>
                <li className="flex items-center py-1 gap-1 text-sm cursor-pointer font-medium text-black duration-300 ease-in-out hover:text-blue-500"
                >
                  <AiFillCaretRight />
                  <p>Payment Out</p>
                </li>
                <li className="flex items-center py-1 gap-1 text-sm cursor-pointer font-medium text-black duration-300 ease-in-out hover:text-blue-500"
                >
                  <AiFillCaretRight />
                  <p>Purchase Return</p>
                </li>
                <li className="flex items-center py-1 gap-1 text-sm cursor-pointer font-medium text-black duration-300 ease-in-out hover:text-blue-500"
                >
                  <AiFillCaretRight />
                  <p>Purchase Order</p>
                </li>
              </ul>
            </div>
            <div>
              <h1 className='text-black font-semibold uppercase ml-5'>other</h1>
              <ul className="flex flex-col mt-3 gap-5 px-4 py-2 dark:border-strokedark">
                <li className="flex items-center py-1 gap-1 text-sm cursor-pointer font-medium text-black duration-300 ease-in-out hover:text-blue-500"
                >
                  <AiFillCaretRight />
                  <p>Expenses</p>
                </li>
                <li className="flex items-center py-1 gap-1 text-sm cursor-pointer font-medium text-black duration-300 ease-in-out hover:text-blue-500"
                >
                  <AiFillCaretRight />
                  <p>Party To Party Transfer</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
