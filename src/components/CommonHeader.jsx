import { React, useState } from "react"
import { MdOutlineCurrencyRupee } from "react-icons/md"
import { BsGraphUp } from "react-icons/bs"
import { FiPrinter } from "react-icons/fi"
import { AiFillPrinter } from "react-icons/ai"


const CommonHeader = () => {

    const [date, setDate] = useState(() => {
        new Date()?.toISOString().slice(0, 10).split("-").reverse().join("-");
    });
    const [nextDate, setNextDate] = useState("");

    function handleDataFilter(filterDate) {
        const preDate = new Date(`${filterDate},23:59:00`);
        const previous = preDate.setDate(preDate.getDate() - 1);

        const postDate = new Date(`${filterDate},0:00:00`);
        const post = postDate.setDate(postDate.getDate() + 1);
        return [previous, post];
    }

    function handle_data(e) {
        const [previous, post] = handleDataFilter(e.target.value);
        setDate(e.target.value);

        if (nextDate) {
            handleNextDate(nextDate);
        } else {
            const newData = reportData.data.data.data.filter(
                (recipet) =>
                    new Date(recipet.date).getTime() > previous &&
                    new Date(recipet.date).getTime() < post
            );
            setData(() => newData);
        }
        setTransaction("?");
    }

    function handleNextDate(e) {
        const [_, post] = handleDataFilter(e);
        const dateData = handleDataFilter(date);

        setNextDate(() => e);

        const newData = reportData.data.data.data.filter(
            (item) =>
                new Date(item.createdAt).getTime() > dateData[0] &&
                new Date(item.createdAt).getTime() < post
        );
        setData(() => newData.reverse());
        setTransaction("?");
    }

    return (
        <>
            <div className="bg-white h-32 shadow-md flex justify-between items-start pt-5 px-3">
                <div className="left">
                    {/*  Filter For Sales */}
                    <div className="flex items-center space-x-4">

                        {/* Select Option Start */}
                        <div>
                            <select name="" id="" className=" h-9  w-full text-slate-900 font-semibold ">
                                <option value="This Month">This Month</option>
                                <option value="All Sales Invoice">All Sales Invoice</option>
                                <option value="Last Month">Last Month</option>
                                <option value="This quater">This quater</option>
                                <option value="This Year">This Year</option>
                                <option value="Custom">Custom</option>
                            </select>
                        </div>
                        {/* Select Option End */}

                        {/* Date Filter Start  */}
                        <div className="flex flex-col">
                            <input
                                id=""
                                value={date}
                                type="Date"
                                onChange={(e) => handle_data(e)}
                                className="outline-none bg-white border rounded-md p-1 cursor-pointer"
                            />
                        </div>

                        <div className="flex flex-col">
                            <input
                                id=""
                                value={nextDate}
                                type="Date"
                                onChange={(e) => handleNextDate(e.target.value)}
                                disabled={date ? false : true}
                                className="outline-none bg-white border rounded-md p-1 cursor-pointer"
                            />
                        </div>
                        {/* Date Filter End  */}

                        {/* All Firm and My Company Filter  Start*/}

                        <div>
                            <select name="" id="" className="border h-8 rounded-sm border-slate-200 text-slate-900 font-medium text-sm ">
                                <option value="All Firms">All Firms</option>
                                <option value="My Company">My Company</option>
                            </select>
                        </div>

                        {/* All Firm and My Company Filter End */}

                    </div>
                    <div>
                        <select name="" id="" className="border p-1.5 rounded-md w-52 mt-5 text-black font-medium focus:outline-none text-sm">
                            <option value="AllTransection">All Transection</option>
                            <option value="Sale">Sale</option>
                            <option value="Purchase">Purchase</option>
                            <option value="Payment-In">Payment -In</option>
                            <option value="Payment-Out">Payment-Out</option>
                            <option value="Credit-Note">Credit-Note</option>
                            <option value="Debit-Note">Debit-Note</option>
                            <option value="Sale-Order">Sale-Order</option>
                            <option value="Purchase-Order">Purchase-Order</option>
                            <option value="Expense">Expense</option>
                            <option value="Delivery Challan">Delivery Challan</option>
                        </select>
                    </div>

                    {/*  Filter For Sales */}
                </div>

                <div className="right flex items-center justify-end space-x-7  w-60 mr-2">
                    <div onClick={() => setSalegraph(true)}
                        className="flex-col justify-center items-center cursor-pointer">
                        <BsGraphUp className="ml-2" />
                        <h1 className="text-xs font-semibold text-[#314259] mt-3 ">Graph</h1>
                    </div>
                    <div className="flex-col justify-center items-center">
                        <div onClick={() => setSaleprintoption(true)}
                            className="w-4 ml-5">
                            <img src="/exel.png" alt="exel" srcset="" className="cursor-pointer" />
                        </div>
                        <h1 className="text-xs font-semibold text-[#314259] mt-3 ">Exel Report</h1>
                    </div>
                    <div onClick={() => setSaleprintoption(true)}
                        className="flex-col justify-center items-center">
                        <AiFillPrinter className="ml-1 text-xl cursor-pointer" />
                        <h1 className="text-xs font-semibold text-[#314259] mt-3 ">Print</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommonHeader;
