
import { useState } from 'react';
import OrganizerDashboard from './OrganizerDashboard/OrganizerDashboard';
import ParticipantDashboard from './ParticipantDashboard/ParticipantDashboard';
import HealthcareDashboard from './HealthcareDashboard/HealthcareDashboard';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
// import axios from 'axios';

const DashboardLayout = () => {
    // const email = 'participant1@example.com';
    // const userSt = "participant"
    const [user] = useState({ role: 'organizer' });
    // const [user,setUser] = useState([]);
    // const [loading,setLoading]= useState(true);

    // useEffect(()=>{
    //     axios.get('http://localhost:5000/users')
    //     .then(res=>{
    //         console.log(res.data);
    //         setUser(res.data);
    //         setLoading(false)
    //     })
    // },[])

    // const userRole = user.find(u=>(u.email  === email) && (u.role === userSt ));
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
    // if(loading){
    //     return <h3> Please wait</h3>
    // }
    return (
        <div>
            <header>
                <Navbar/>
            </header>

            {/* Render the appropriate dashboard based on user role */}
            <div className='min-h-[100vh]'>
                {renderDashboard()}
            </div>

            <div className=''>
                <Footer />
            </div>
        </div>
    );
};

export default DashboardLayout;
