import NavbarFw from "../../containers/nav/NavbarFw";
import Footer from "../../containers/footer/Footer";
import FwEntries from "../../components/fw/entries/FwEntries";

const FwDashboard = () => {
    return (
        <NavbarFw>
            <div className="bg-gray-200 min-h-screen flex flex-col">
                <div className="space-y-6">
                    <FwEntries />
                </div>
                <Footer />
            </div>
        </NavbarFw>
    );
};

export default FwDashboard;