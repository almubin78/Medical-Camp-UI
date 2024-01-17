import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const RootPage = () => {
    return (
        <div>
            this is root page
            <Link to='/'>Home</Link>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootPage;