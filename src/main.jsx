
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './Components/router/router.jsx'
import { AuthContextFunction } from './Components/AuthProvider/AuthContextFunction.jsx'
// import { AuthContextFunction } from './Components/AuthProvider/AuthContextFunction.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextFunction>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </AuthContextFunction>

  ,
)
