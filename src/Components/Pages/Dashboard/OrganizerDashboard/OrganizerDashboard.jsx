import { Link, Outlet } from "react-router-dom";


const OrganizerDashboard = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl divider font-bold mb-6">Organizer Dashboard</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <nav className="col-span-1 md:col-span-1 lg:col-span-1">
                    <ul className="space-y-1">
                        
                        <li>
                            <Link to="/dashboard/organizer/profile" className="block py-2 px-4 rounded-lg text-lg text-blue-800 bg-blue-200 hover:bg-blue-300 hover:text-blue-900">Profile Management</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/organizer/add-a-camp" className="block py-2 px-4 rounded-lg text-lg text-blue-800 bg-blue-200 hover:bg-blue-300 hover:text-blue-900">Add A Camp</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/organizer/manage-camps" className="block py-2 px-4 rounded-lg text-lg text-blue-800 bg-blue-200 hover:bg-blue-300 hover:text-blue-900">Manage Camp</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/organizer/manage-registered-camps" className="block py-2 px-4 rounded-lg text-lg text-blue-800 bg-blue-200 hover:bg-blue-300 hover:text-blue-900">Manage Registered Camps</Link>
                        </li>
                    </ul>
                </nav>
                <div className="col-span-1 md:col-span-1 lg:col-span-2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default OrganizerDashboard;