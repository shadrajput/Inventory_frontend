import PurchasePaymentOutHeader from "../../components/PurchasePaymentOutHeader";
import PurchasePaymentOutTransection from "../../components/PurchasePaymentOutTransection";
import CommonHeader from "../../components/CommonHeader";

const SalesPaymentIn = () => {
    return (
        <>
            <div className="p-3">
                <CommonHeader />
                <PurchasePaymentOutTransection />
            </div>
        </>
    );
};

export default SalesPaymentIn;
