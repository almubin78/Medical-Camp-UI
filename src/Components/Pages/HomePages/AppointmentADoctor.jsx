

const AppointmentADoctor = () => {
    return (
        <div className="py-10 bg-gray-100">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Book an Appointment with a Doctor</h2>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1">
                        <label htmlFor="fullName" className="block mb-2">Full Name</label>
                        <input type="text" id="fullName" className="input input-bordered w-full mb-4" placeholder="Enter your full name" />
                        
                        <label htmlFor="email" className="block mb-2">Email Address</label>
                        <input type="email" id="email" className="input input-bordered w-full mb-4" placeholder="Enter your email address" />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="specialty" className="block mb-2">Doctor's Specialty</label>
                        <input type="text" id="specialty" className="input input-bordered w-full mb-4" placeholder="Enter the doctor's specialty" />
                        
                        <label htmlFor="date" className="block mb-2">Preferred Date</label>
                        <input type="date" id="date" className="input input-bordered w-full mb-4" />
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary px-8 py-3">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentADoctor;
