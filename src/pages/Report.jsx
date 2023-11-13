import { useState } from "react";
import SalesInvoice from "./Sales/SalesInvoice";

const Report = () => {
  const [Purchase, setPurchase] = useState(false)
  const [Sale, setSale] = useState(false)

  function SelectReport(e) {
    console.log(e.target.value)
  }
  return (
    <>
      <div className="flex items-start w-full">
        <div className="bg-white shadow-md w-64">
          {/* Transection Report */}
          <div className="bg-green-100 p-3 text-sm">
            Transaction report
          </div>
          <div className="p-2">
            <ul >
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                All Transections
              </li>
              <li onChange={SelectReport(e)}
                className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Purchase
              </li>
              <li
                className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Sale
              </li>

              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Balance Sheet
              </li>
            </ul>
          </div>
          {/* Transection Report */}

          {/* Party Report */}
          <div className="bg-green-100 p-3 text-sm">
            Party report
          </div>
          <div className="p-2">
            <ul >
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                All Parties
              </li>
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Party Statement
              </li>
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Party Report By Item
              </li>
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Sale Purchase By Party
              </li>
            </ul>
          </div>
          {/* Party Report */}

          {/* Item/Stock Report */}
          <div className="bg-green-100 p-3 text-sm">
            Item / Stock report
          </div>
          <div className="p-2">
            <ul >
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Stock Summary
              </li>
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Item Report By Party
              </li>
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Item Wise Profit And Loss
              </li>
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Stock Details
              </li>
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Item Detail
              </li>
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Sale/Purchase Report By Item Category
              </li>
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Stock Summary Report By Item Category
              </li>
            </ul>
          </div>
          {/* Item/Stock Report */}


          {/* Expense Report */}
          <div className="bg-green-100 p-3 text-sm">
            Expense report
          </div>
          <div className="p-2">
            <ul >
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Expense
              </li>
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Expense Category Report
              </li>
              <li className="py-2 text-xs font-semibold cursor-pointer hover:bg-slate-200 pl-2">
                Expense Item Report
              </li>
            </ul>
          </div>
          {/* Item/Stock Report */}
        </div>
        <div className="w-full">
          {
            Sale == true ?
              <SalesInvoice />
              :
              ""
          }
        </div>
      </div>
    </>
  );
};

export default Report;
