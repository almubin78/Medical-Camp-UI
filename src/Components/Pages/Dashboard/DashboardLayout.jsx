
import OrganizerDashboard from './OrganizerDashboard/OrganizerDashboard';
import ParticipantDashboard from './ParticipantDashboard/ParticipantDashboard';
import HealthcareDashboard from './HealthcareDashboard/HealthcareDashboard';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import useRole from '../../Hooks/useRole';
// import { useGlobalContext } from '../../AuthProvider/AuthContextFunction';



const DashboardLayout = () => {
    const role = useRole();
    
    const logic ={
        role :role
    }
    console.log('logic====',logic);
   
    const renderDashboard = () => {
        if ( logic) {
            switch (logic?.role) {
                case 'organizer':
                    return <OrganizerDashboard />;
                case 'participant':
                    return <ParticipantDashboard />;
                case 'healthcare professional':
                    return <HealthcareDashboard />;
                default:
                    return <div>No dashboard found for this user role.</div>;
            }
        } else {
            return <div>Loading...</div>;
        }
    };

    return (
        <div>
            <header>
                <Navbar />
            </header>

            <div className='min-h-[100vh]'>
                {/* {loading ? <div>Loading...</div> : <div>not loading</div>} */}
                {/* {loading ? <div>Loading...</div> : renderDashboard()} */}
                <div>{renderDashboard()}</div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default DashboardLayout;
