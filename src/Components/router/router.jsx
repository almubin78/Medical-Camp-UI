
import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../Pages/MainRoot/RootPage';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/FormRelatedPages/Login';
import Register from '../Pages/FormRelatedPages/Register';

const router = createBrowserRouter([
    {
        path:'/',
        element:<RootPage/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
        ]
    },{
        path:'*',
        element:<ErrorPage/>
    }
])

export default router;