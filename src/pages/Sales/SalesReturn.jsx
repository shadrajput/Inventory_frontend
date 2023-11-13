import SalesReturnTransection from "../../components/SaleReturnTransection";
import CommonHeader from "../../components/SalesPaymentInHeader";

const SaleReturn = () => {
  return (
    <>
      <div className="p-3">
      <CommonHeader/>
        <SalesReturnTransection />
      </div>
    </>
  );
};

export default SaleReturn;
