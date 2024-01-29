import { Link, Outlet } from "react-router-dom";



const ParticipantDashboard = () => {
    return (
        <div>
            <h2 className='divider'>Healthcare Participant Dashboard</h2>

            <div className="grid grid-cols-2">
                <nav>
                    <ul>
                        <li><Link to="/dashboard">Home</Link></li>
                        <li><Link to="/dashboard/participant-profile">Profile Management</Link></li>
                        <li><Link to="/dashboard/participant-payments">Payment History</Link></li>
                        <li><Link to="/dashboard/participant-registered-camps">Registered Camps</Link></li>
                        <li><Link to="/dashboard/participant-feedback-and-ratings">Feedback and Ratings</Link></li>
                        {/* Add more dashboard options as needed */}
                    </ul>
                </nav>
                <Outlet />
            </div>
        </div>
    );
};

export default ParticipantDashboard;
