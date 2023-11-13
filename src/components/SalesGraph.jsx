import React, { useState } from "react";
import ChartOne from '../components/ChartOne.jsx';

function SalesGraph
    ({ showModal, handleShowModal, PhoneDetails, is_Edit }) {

    const handleModalClose = () => {
        handleShowModal(false);
    };

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
        <div
            onClose={handleModalClose}>
            <div className="inline-block w-full bg-white p-6 text-left  transition-all transform bg-gray-700 shadow-xl rounded-lg ">
                <div className="border-b pb-3 border-slate-200 flex items-center">
                    <div className="flex items-center space-x-3 border px-2">
                        {/* Date Filter Start  */}
                        <div className="flex items-center space-x-2 ">
                            <label htmlFor="To">From</label>
                            <input
                                id=""
                                value={date}
                                type="Date"
                                onChange={(e) => handle_data(e)}
                                className="outline-none p-1 cursor-pointer"
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <label htmlFor="From">To</label>
                            <input
                                id=""
                                value={nextDate}
                                type="Date"
                                onChange={(e) => handleNextDate(e.target.value)}
                                disabled={date ? false : true}
                                className="outline-none p-1 cursor-pointer"
                            />
                        </div>
                    </div>
                    {/* Date Filter End  */}

                    <div className="absolute top-6 right-2.5 flex items-center space-x-3">
                        <button
                            type="button"
                            className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="match-formation-modal"
                            onClick={handleModalClose}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full py-5">
                    <div>
                        <h1 className="text-black font-semibold">Sale Graph</h1>
                    </div>
                </div>

                <div>
                    <ChartOne />
                </div>
            </div>
        </div>
    );
}

export default SalesGraph
    ;