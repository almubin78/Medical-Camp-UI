import { useEffect, useState } from "react";
import { useGlobalContext } from "../AuthProvider/AuthContextFunction";
import axios from "axios";

const useProfile = () => {
    const {user} = useGlobalContext();
    const [loading,setLoading] = useState(true);
    const [userInfo,setUserInfo] =useState({})
    console.log(user,'user in hooks');
    useEffect(() => {
        axios.get(`https://medical-camp-server-lyart.vercel.app/email/${user?.email}`)
            .then(res => {
                setUserInfo(res.data);
              setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    }, [user?.email]);
    return userInfo
};

export default useProfile;