import SaleHeader from "../../components/SaleHeader";
import SalesTransection from "../../components/SaleTransection";

const SalesInvoice = () => {
  return (
    <>
      <div className='p-3'>
        <SaleHeader />

        {/* Sale Transection Section Start */}
        <SalesTransection />
        {/* Sale Transection Section End */}

      </div>

    </>
  );
};

export default SalesInvoice;
