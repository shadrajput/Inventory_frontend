import PurchasePaymentOutTransection from "../../components/PurchasePaymentOutTransection";
import PurchaseReturnHeader from "../../components/PurchaseReturnHeader";

const PurchaseReturn = () => {
    return (
        <>
            <div className="p-3">
                <PurchaseReturnHeader />
                <PurchasePaymentOutTransection />
            </div>
        </>
    );
};

export default PurchaseReturn;
