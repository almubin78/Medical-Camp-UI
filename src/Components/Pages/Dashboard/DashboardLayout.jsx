
import { useState } from 'react';
import OrganizerDashboard from './OrganizerDashboard/OrganizerDashboard';
import ParticipantDashboard from './ParticipantDashboard/ParticipantDashboard';
import HealthcareDashboard from './HealthcareDashboard/HealthcareDashboard';
import Footer from '../Footer/Footer';

const DashboardLayout = () => {
    const [user] = useState({ role: 'healthcare professional' });
    console.log(user.role);
     // Assuming you have access to user data through your AuthContext

    // Determine the user's role (organizer, participant, healthcare professional)
    // This is a simplified example, adjust based on your actual user data and roles
    const userRole = user ? user.role : '';

    // Render different dashboard components based on the user's role
    const renderDashboard = () => {
        switch (userRole) {
            case 'organizer':
                return <OrganizerDashboard />;
            case 'participant':
                return <ParticipantDashboard />;
            case 'healthcare professional':
                return <HealthcareDashboard />;
            default:
                return <div>No dashboard found for this user role.</div>;
        }
    };

    return (
        <div>
            <header>
                navigatein
            </header>

            {/* Render the appropriate dashboard based on user role */}
            {renderDashboard()}

            <Footer/>
        </div>
    );
};

export default DashboardLayout;
