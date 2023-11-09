import SalesPaymentInHeader from "../../components/SalesPaymentInHeader";
import SalesPaymentInTransection from "../../components/SalesPaymentInTransection";

const SalesPaymentIn = () => {
    return (
        <>
            <div className="p-3">
                <SalesPaymentInHeader />
                <SalesPaymentInTransection />
            </div>
        </>
    );
};

export default SalesPaymentIn;
