import NavbarFuel from "../../containers/nav/NavbarFuel";
import Footer from "../../containers/footer/Footer";
import FuelEntries from "../../components/fuel/entries/FuelEntries";

const FuelDashboard = () => {
    return (
        <NavbarFuel>
            <div className="bg-gray- min-h-screen flex flex-col">
                <div className="space-y-6">
                    <FuelEntries />
                </div>
                <Footer />
            </div>
        </NavbarFuel>
    );
};

export default FuelDashboard;