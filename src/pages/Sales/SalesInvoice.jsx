import SalesHeader from "../../components/SalesHeader";
import SalesTransection from "../../components/SalesTransection";

const SalesInvoice = () => {
  return (
    <>
      <div className="p-3">
        <SalesHeader />
        <SalesTransection />
      </div>
    </>
  );
};

export default SalesInvoice;
