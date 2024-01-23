// PopularCamps.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const PopularCamps = () => {
    const [camps, setCamps] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [campsResponse, testimonialsResponse] = await Promise.all([
                    axios.get('camps.json'),
                    axios.get('testimonials.json'), // Replace with your API endpoint
                ]);

                setCamps(campsResponse.data);
                setTestimonials(testimonialsResponse.data);
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
                {camps.map((camp) => (
                    <div key={camp.id} className="border border-gray-300  mb-4 rounded-lg shadow-md p-5">
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
                        <a href={`/camp-details/${camp.id}`} className="text-blue-500 underline">
                            See Details
                        </a>
                    </div>
                ))}
            </div>
            {/* Testimonials Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Participant Testimonials</h2>
                <div className="flex space-x-4">
                    {/* Testimonials Slider Code Goes Here */}
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="border p-4 rounded-md shadow-md">
                            <p className="mb-2">{testimonial.feedback}</p>
                            <p>
                                <strong>Rating:</strong> {testimonial.rating}
                            </p>
                            <p>
                                <strong>Camp:</strong> {testimonial.campName}
                            </p>
                            <p>
                                <strong>Date:</strong> {testimonial.date}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Sections */}
            {/* Add your additional sections here, for example, "Upcoming Camps" and another section */}
        </div>
    );
};

export default PopularCamps;
