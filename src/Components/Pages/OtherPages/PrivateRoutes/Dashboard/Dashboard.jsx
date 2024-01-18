import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            
            <Link className="btn" to='/'>Back to Home</Link>
            <p>this is dashboard</p>
            <Outlet/>
        </div>
    );
};

export default Dashboard;