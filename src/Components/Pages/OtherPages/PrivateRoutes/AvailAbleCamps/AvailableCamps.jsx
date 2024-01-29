// AvailableCamps.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AvailableCamps = () => {
    const [camps, setCamps] = useState([]);

    useEffect(() => {
        const fetchCamps = async () => {
            try {
                const response = await axios.get('camps.json'); // Replace with your API endpoint
                setCamps(response.data);
            } catch (error) {
                console.error('Error fetching camps:', error);
            }
        };

        fetchCamps();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Available Camps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {camps.map((camp) => {

                    const { id, image, time, name, fees, date, location, services, professionals, targetAudience, participants } = camp;
                    
                    return <div key={camp.id} className="border border-gray-300 p-4 rounded-md shadow-md">
                        <img src={camp.image} alt={camp.name} className="mb-2 rounded" />
                        <h3 className="text-lg font-bold mb-1">{camp.name}</h3>
                        <p>
                            <strong>Date and Time:</strong> {camp.date}, {camp.time}
                        </p>
                        <p>
                            <strong>Location:</strong> {camp.location}
                        </p>
                        <p>
                            <strong>Services Provided:</strong> {camp.services}
                        </p>
                        <p>
                            <strong>Professionals:</strong> {camp.professionals}
                        </p>
                        <p>
                            <strong>Target Audience:</strong> {camp.targetAudience}
                        </p>
                        <p>{camp.description}</p>
                        <Link state={{ id, image, name, time, fees, date, location, services, professionals, targetAudience, participants }} to={`/camp-details/${id}`} className="text-blue-500 underline">
                            See Details
                        </Link>
                    </div>
                }

                )}
            </div>
        </div>
    );
};

export default AvailableCamps;
