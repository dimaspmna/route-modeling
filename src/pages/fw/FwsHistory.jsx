import NavbarFw from "../../containers/nav/NavbarFw";
import Footer from "../../containers/footer/Footer";
import FwHistory from "../../components/fw/history/FwHistory";
import SuccessAlert from "../../components/user/components/SuccessAlert";

const FwsHistory = () => {
    return (
        <NavbarFw>
            <div className="bg-gray-50 min-h-screen flex flex-col">
                <div className="space-y-6">
                    <FwHistory/>
                </div>
                <Footer />
            </div>
        </NavbarFw>
    );
};

export default FwsHistory;