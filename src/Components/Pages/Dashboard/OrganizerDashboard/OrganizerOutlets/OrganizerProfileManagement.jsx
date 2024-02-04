import useProfile from '../../../../Hooks/useProfile';

const OrganizerProfileManagement = () => {
    const userInfo = useProfile();

    const handleUpdateProfile = (updatedProfile) => {
        // Update user profile data
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl divider font-bold mb-6">Profile Management</h2>

            {userInfo ? (
                <div className=''>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg font-semibold mb-1">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={userInfo.name}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-semibold mb-1">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userInfo.email}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            readOnly
                        />
                        <p className="text-red-300">You can not change your email</p>
                    </div>

                   

                    <button
                        onClick={() => handleUpdateProfile(userInfo)}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Update Profile
                    </button>
                </div>
            ) : (
                <div>No profile found</div>
            )}
        </div>
    );
};

export default OrganizerProfileManagement;
