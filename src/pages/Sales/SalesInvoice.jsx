import { React, useState } from "react"
import { NavLink, useLocation } from 'react-router-dom';
import { MdOutlineCurrencyRupee } from "react-icons/md"
import { BsGraphUp } from "react-icons/bs"
import { AiFillPrinter } from "react-icons/ai"
import SalesGraph from "../../components/SalesGraph";
import SalePrintOption from "../../components/SalePrintOption";
import { PiDotsThreeVerticalBold } from "react-icons/pi"
import { AiFillPlusCircle } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"
import SaleInvoiceForm from "./SaleInvoiceForm";
import SaleHeader from "../../components/SaleHeader";
import SalesTransection from "../../components/SaleTransection";

const SalesInvoice = () => {
  const [Salegraph, setSalegraph] = useState(false);
  const [Saleprintoption, setSaleprintoption] = useState(false);
  const [Saleinvoiceform, setSaleinvoiceform] = useState(false);
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
      <div className={`${Salegraph == true || Saleinvoiceform == true ? "hidden" : "block"} p-3`}>
        <SaleHeader />

        {/* Sale Transection Section Start */}
        <SalesTransection />
        {/* Sale Transection Section End */}

      </div>



      {
        Salegraph == true ?
          <SalesGraph
            showModal={Salegraph}
            handleShowModal={setSalegraph}
          // PhoneDetails={PhoneDetails}
          // is_Edit={is_Edit}
          />
          :
          ""
      }

      <SalePrintOption
        showModal={Saleprintoption}
        handleShowModal={setSaleprintoption}
      // PhoneDetails={PhoneDetails}
      // is_Edit={is_Edit}
      />

      {
        Saleinvoiceform == true ?
          <SaleInvoiceForm
            showModal={Saleinvoiceform}
            handleShowModal={setSaleinvoiceform}
          // PhoneDetails={PhoneDetails}
          // is_Edit={is_Edit}
          />
          :
          null
      }

    </>
  );
};

export default SalesInvoice;
