// HealthcareDashboard.jsx
import { Link, Outlet } from 'react-router-dom';

const HealthcareDashboard = () => {
    return (
        <div>
            <h2 className='divider'>Healthcare Professional Dashboard</h2>

            <div className="grid grid-cols-2">
                <nav>
                    <ul>
                        <li><Link to="/dashboard/professional-profile">Profile Management</Link></li>
                        {/* Add more dashboard options as needed */}
                    </ul>
                </nav>
                <Outlet />
            </div>
        </div>
    );
};

export default HealthcareDashboard;
