import NavbarUser from "../../containers/nav/NavbarUser";
import Footer from "../../containers/footer/Footer";
import ShipForm from "../../components/user/form/ShipForm";
import SuccessAlert from "../../components/user/components/SuccessAlert";

const UsersDashboard = () => {
    return (
        <NavbarUser>
            <div className="bg-gray-50 min-h-screen flex flex-col">
                <div className="space-y-6">
                    <ShipForm />
                </div>
                <div className="space-y-6">
                    {/* <SuccessAlert /> */}
                </div>
                <Footer />
            </div>
        </NavbarUser>
    );
};

export default UsersDashboard;