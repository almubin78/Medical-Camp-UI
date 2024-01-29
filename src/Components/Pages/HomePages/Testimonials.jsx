import axios from "axios";
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [ testimonialsResponse] = await Promise.all([
                    axios.get('testimonials.json'), 
                ]);

                setTestimonials(testimonialsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (<>

        <div className="mt-8" >
            <h2 className="text-2xl font-bold mb-4">Participant Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 space-x-4 space-y-6">
                {/* Testimonials Slider Code Goes Here */}
                {testimonials?.map((testimonial) => (
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
    </ >
    );
};

export default Testimonials;