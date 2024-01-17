// import { useContext } from "react";
import {  useGlobalContext } from "../AuthProvider/AuthContextFunction";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
// const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const {user, loading} = useGlobalContext();
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;