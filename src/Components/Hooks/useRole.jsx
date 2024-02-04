import { useEffect, useState } from "react";
import { useGlobalContext } from "../AuthProvider/AuthContextFunction";
import axios from "axios";



const useRole = () => {
    const {user} = useGlobalContext();
    const [loading,setLoading] = useState(true);
    const [role,setRole] =useState({})
    console.log(user,'user in hooks');
    useEffect(() => {
        axios.get(`https://medical-camp-server-lyart.vercel.app/email/${user?.email}`)
            .then(res => {
              setRole(res.data.role);
              setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    }, [user?.email]);
    // return role
    return "participant" ////just wow
    // return "healthcare professional" 
    // return "organizer" 
};

export default useRole;