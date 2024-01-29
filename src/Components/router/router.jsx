import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../Pages/MainRoot/RootPage';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/FormRelatedPages/Login';
import Register from '../Pages/FormRelatedPages/Register';
import PrivateRoute from '../Routes/PrivateRoute';
import AvailableCamps from '../Pages/OtherPages/PrivateRoutes/AvailAbleCamps/AvailableCamps';
import Dashboard from '../Pages/OtherPages/PrivateRoutes/Dashboard/Dashboard';
import HomeContainer from '../Pages/HomePages/HomeContainer';
import ContactUs from '../Pages/OtherPages/ContactUs/ContactUs';
import CampDetails from '../Pages/OtherPages/PrivateRoutes/CampDetails/CampDetails';
import DashboardLayout from '../Pages/Dashboard/DashboardLayout';
import HealthcareProfessionalProfile from '../Pages/Dashboard/HealthcareDashboard/HealthcareProfessionalProfile';

import PaymentHistory from '../Pages/Dashboard/ParticipantDashboard/ParticipantOutlet/PaymentHistory';
import RegisteredCamps from '../Pages/Dashboard/ParticipantDashboard/ParticipantOutlet/RegisteredCamps';
import FeedbackAndRatings from '../Pages/Dashboard/ParticipantDashboard/ParticipantOutlet/FeedbackAndRatings';
import ProfileManagement from '../Pages/Dashboard/ParticipantDashboard/ParticipantOutlet/ProfileManagement';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <HomeContainer />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/camp-details/:id',
        element: <CampDetails />
      },
      {
        path: '/available',
        element: <PrivateRoute><AvailableCamps /></PrivateRoute>,
      },

    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      }
      ,
      {
        path: '/dashboard/professional-profile',
        element: <HealthcareProfessionalProfile/>,
      },
      {
        path: '/dashboard/participant-profile',
        element: <ProfileManagement/>,
      },
      {
        path: '/dashboard/participant-payments',
        element: <PaymentHistory/>,
      },
      {
        path: '/dashboard/participant-registered-camps',
        element: <RegisteredCamps/>,
      },
      {
        path: '/dashboard/participant-feedback-and-ratings',
        element: <FeedbackAndRatings/>,
      },
      {
        path: '*',
        element: <h3>welcome</h3>,
      },
    ],
  },
]);

export default router;
