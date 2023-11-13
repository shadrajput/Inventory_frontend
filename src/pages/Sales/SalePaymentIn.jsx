import { React } from "react"
import SalesPaymentInTransection from "../../components/SalesPaymentInTransection";
import CommonHeader from "../../components/CommonHeader";

const SalesPaymentIn = () => {
    return (
        <>
            <div className="p-3">
                <CommonHeader/>
                <SalesPaymentInTransection />
            </div>
        </>
    );
};

export default SalesPaymentIn;
