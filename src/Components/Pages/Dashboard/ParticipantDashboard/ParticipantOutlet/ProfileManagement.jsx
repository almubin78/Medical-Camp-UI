import { useState, useEffect } from 'react';
import axios from 'axios';
import useRole from '../../../../Hooks/useRole';

const ProfileManagement = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const role = useRole()
    useEffect(() => {
        // Fetch user profile data from the server
        axios.get('api/user/profile')
            .then(response => {
                setUserProfile(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user profile:', error);
                setLoading(false);
            });
    }, []);

    const handleUpdateProfile = (updatedProfile) => {
        // Update user profile data
        axios.put('api/user/profile', updatedProfile)
            .then(response => {
                console.log('Profile updated successfully:', response.data);
                setUserProfile(response.data);
            })
            .catch(error => {
                console.error('Error updating user profile:', error);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {userProfile ? (
                <div>
                    <h2>User Profile</h2>
                    <p>Name: {userProfile.name}</p>
                    <p>Email: {userProfile.email}</p>
                    {/* Add more profile fields as needed */}
                    {role === 'Organizer' && (
                        <div>
                            organizer 
                            {/* Organizer-specific profile fields and actions */}
                        </div>
                    )}
                    {role === 'Participant' && (
                        <div>
                            Participant
                            {/* Participant-specific profile fields and actions */}
                        </div>
                    )}
                    {role === 'Professional' && (
                        <div>
                            Professional
                            {/* Professional-specific profile fields and actions */}
                        </div>
                    )}
                    <button onClick={() => handleUpdateProfile(userProfile)}>Update Profile</button>
                </div>
            ) : (
                <div>No profile found</div>
            )}
        </div>
    );
};

export default ProfileManagement;
