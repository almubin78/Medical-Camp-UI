import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const RootPage = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootPage;