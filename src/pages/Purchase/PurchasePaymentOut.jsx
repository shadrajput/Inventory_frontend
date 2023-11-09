import PurchasePaymentOutHeader from "../../components/PurchasePaymentOutHeader";
import PurchasePaymentOutTransection from "../../components/PurchasePaymentOutTransection";


const SalesPaymentIn = () => {
    return (
        <>
            <div className="p-3">
                <PurchasePaymentOutHeader />
                <PurchasePaymentOutTransection />
            </div>
        </>
    );
};

export default SalesPaymentIn;
