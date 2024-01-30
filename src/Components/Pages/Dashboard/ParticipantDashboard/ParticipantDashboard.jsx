import { Link, Outlet } from "react-router-dom";

const ParticipantDashboard = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6">Healthcare Participant Dashboard</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <nav className="col-span-1 md:col-span-1">
                    <ul className="space-y-4">
                        <li>
                            <Link to="/dashboard" className="block py-2 px-4 rounded-lg text-lg text-blue-800 bg-blue-200 hover:bg-blue-300 hover:text-blue-900">Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/participant-profile" className="block py-2 px-4 rounded-lg text-lg text-blue-800 bg-blue-200 hover:bg-blue-300 hover:text-blue-900">Profile Management</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/participant-payments" className="block py-2 px-4 rounded-lg text-lg text-blue-800 bg-blue-200 hover:bg-blue-300 hover:text-blue-900">Payment History</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/participant-registered-camps" className="block py-2 px-4 rounded-lg text-lg text-blue-800 bg-blue-200 hover:bg-blue-300 hover:text-blue-900">Registered Camps</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/participant-feedback-and-ratings" className="block py-2 px-4 rounded-lg text-lg text-blue-800 bg-blue-200 hover:bg-blue-300 hover:text-blue-900">Feedback and Ratings</Link>
                        </li>
                    </ul>
                </nav>
                <div className="col-span-1 md:col-span-2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ParticipantDashboard;
