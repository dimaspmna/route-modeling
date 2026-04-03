import NavbarSpv from "../../containers/nav/NavbarSpv";
import Spv from "../../components/spv/Spv";
import Footer from "../../containers/footer/Footer";

const SpvApproval = () => {
    return (
        <NavbarSpv>
            <div className="bg-gray- min-h-screen flex flex-col">
                <div className="space-y-6">
                    <Spv/>
                </div>
                <Footer />
            </div>
        </NavbarSpv>
    );
};

export default SpvApproval;