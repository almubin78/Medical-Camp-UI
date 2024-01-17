
import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../Pages/MainRoot/RootPage';
import ErrorPage from '../Pages/ErrorPage';

const router = createBrowserRouter([
    {
        path:'/',
        element:<RootPage/>,
        children:[
            {
                // path:'*',
                // element:<ErrorPage/>
            }
        ]
    },{
        path:'*',
        element:<ErrorPage/>
    }
])

export default router;