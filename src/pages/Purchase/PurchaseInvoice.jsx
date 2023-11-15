import PurchaseHeader from "../../components/PurchaseHeader";
import PurchaseTransection from "../../components/PurchaseTransection";


const PurchaseInvoice = () => {
    return (
        <div className='p-3'>
            <PurchaseHeader />
            <PurchaseTransection />
        </div>
    );
};

export default PurchaseInvoice;
