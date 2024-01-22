// PopularCamps.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const PopularCamps = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    // Fetch data from a JSON file using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('camps.json'); // Replace with your API endpoint
        setCamps(response.data);
      } catch (error) {
        console.error('Error fetching camps:', error);
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

      {camps.map((camp) => (
        <div key={camp.id} className="border border-gray-300 p-4 mb-4">
          <h3 className="text-xl font-bold mb-2">{camp.name}</h3>
          <img src={camp.image} alt={camp.name} className="mb-2 rounded" />
          <p>
            <strong>Camp Fees:</strong> {camp.fees}
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
  );
};

export default PopularCamps;
