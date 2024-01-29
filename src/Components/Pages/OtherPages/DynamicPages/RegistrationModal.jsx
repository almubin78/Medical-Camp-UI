// RegistrationModal.jsx
import { useState } from 'react';

const RegistrationModal = ({ campDetails, onClose }) => {
    const [participantInfo, setParticipantInfo] = useState({
        name: '',
        age: '',
        phone: '',
        gender: '',
        address: '',
        emergencyContact: '',
    });
    console.log(campDetails);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setParticipantInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handleRegistrationSubmit = () => {
        // Add logic for submitting participantInfo to the backend
        // For simplicity, we're logging the data to the console
        console.log('Submitted Participant Info:', participantInfo);

        // Close the modal
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Participant Registration</h2>

                {/* Registration Form */}
                <form>
                    {/* Add input fields for participant information */}
                    {/* For simplicity, using basic input fields */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="name">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={participantInfo.name}
                            onChange={handleInputChange}
                            className="w-full border rounded-md p-2"
                        />
                    </div>

                    {/* Add more input fields for other participant information */}
                    {/* ... */}

                    {/* Submit Button */}
                    <button
                        type="button"
                        onClick={handleRegistrationSubmit}
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Submit Registration
                    </button>
                </form>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 cursor-pointer"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default RegistrationModal;
