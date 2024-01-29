import {  useLocation } from "react-router-dom";




const CampDetails = () => {
    const { id, name,image,time, fees, date, location, services, professionals, targetAudience, participants } = useLocation().state;
    
    return (
        <div key={id} className="border border-gray-300  mb-4 rounded-lg shadow-md p-5">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <img src={image} alt={name} className="mb-2 rounded min-h-[200px] min-w-[400px] max-h-[200px] max-w-[400px]" />
            <p>
                <strong>Camp Fees:</strong> ${fees}
            </p>
            <p>
                <strong>Scheduled Date and Time:</strong> {date}, {time}
            </p>
            <p>
                <strong>Venue Location:</strong> {location}
            </p>
            <p>
                <strong>Specialized Services Provided:</strong> {services}
            </p>
            <p>
                <strong>Healthcare Professionals:</strong> {professionals}
            </p>
            <p>
                <strong>Target Audience:</strong> {targetAudience}
            </p>
            <p>
                <strong>Participant Count:</strong> {participants}
            </p>
        </div>
    );
};

export default CampDetails;
