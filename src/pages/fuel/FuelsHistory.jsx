import NavbarFuel from "../../containers/nav/NavbarFuel";
import Footer from "../../containers/footer/Footer";
import FuelHistory from "../../components/fuel/history/FuelHistory";
import SuccessAlert from "../../components/user/components/SuccessAlert";

const FuelsHistory = () => {
    return (
        <NavbarFuel>
            <div className="bg-gray-50 min-h-screen flex flex-col">
                <div className="space-y-6">
                    <FuelHistory/>
                </div>
                <Footer />
            </div>
        </NavbarFuel>
    );
};

export default FuelsHistory;