// PopularCamps.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PopularCamps = () => {
    const [camps, setCamps] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [campsResponse] = await Promise.all([
                    axios.get('camps.json'),
                    // axios.get('testimonials.json'), 
                ]);

                setCamps(campsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const sortCamps = () => {
        const sortedCamps = [...camps].sort((a, b) => b.participants - a.participants);
        setCamps(sortedCamps);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Popular Medical Camps</h2>
            <button onClick={sortCamps} className="mb-4 bg-blue-500 text-white py-2 px-4 rounded">
                Sort by Participant Count
            </button>

            <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-3'>
                {camps.map((camp) => 
                    {
                        const {id,image,time,name,fees,date,location,services,professionals,targetAudience,participants} = camp;
                        
                        return <div key={camp.id} className="border border-gray-300  mb-4 rounded-lg shadow-md p-5">
                        <h3 className="text-xl font-bold mb-2">{camp.name}</h3>
                        <img src={camp.image} alt={camp.name} className="mb-2 rounded min-h-[200px] min-w-[400px] max-h-[200px] max-w-[400px]" />
                        <p>
                            <strong>Camp Fees:</strong> ${camp.fees}
                        </p>
                        <p>
                            <strong>Scheduled Date and Time:</strong> {camp.date}, {camp.time}
                        </p>
                        <p>
                            <strong>Venue Location:</strong> {camp.location}
                        </p>
                        <p>
                            <strong>Specialized Services Provided:</strong> {camp.services}
                        </p>
                        <p>
                            <strong>Healthcare Professionals:</strong> {camp.professionals}
                        </p>
                        <p>
                            <strong>Target Audience:</strong> {camp.targetAudience}
                        </p>
                        <p>
                            <strong>Participant Count:</strong> {camp.participants}
                        </p>
                        <Link state={{id,image,name,time,fees,date,location,services,professionals,targetAudience,participants}} to={`/camp-details/${id}`} className="text-blue-500 underline">
                            See Details
                        </Link>
                    </div>
                    }
                
                )}
            </div>
            

            {/* Additional Sections */}
            {/* Add your additional sections here, for example, "Upcoming Camps" and another section */}
        </div>
    );
};

export default PopularCamps;
