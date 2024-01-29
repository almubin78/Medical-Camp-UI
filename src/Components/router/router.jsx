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
    ],
  },
]);

export default router;
