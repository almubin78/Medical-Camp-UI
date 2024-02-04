import axios from "axios";

const AddCamp = () => {
    const handleAddCamp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        // const image = form.image.value;
        // const time = form.time.value;
        const location = form.location.value;
        const services = form.services.value;
        const professionals = form.professionals.value;
        const fees = form.fees.value;
        const targetAudience = form.targetAudience.value;

        const newCamp = {
            name, fees, date: new Date().toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric' }),  location, services, professionals, targetAudience, participants: ''
        }
        console.log(newCamp);
        
        axios.post('http://localhost:5000/addCamp',newCamp)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))

    }
    return (
        <div className="card-body sm:w-3/4 lg:w-2/4 mx-auto">
            <form onSubmit={handleAddCamp}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Camp title</span>
                    </label>
                    <input name='name' type="text" placeholder="Enter Your camp Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">location</span>
                    </label>
                    <input name='location' type="text" placeholder="location" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Services</span>
                    </label>
                    <input name='services' type="text" placeholder="services" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">professionals</span>
                    </label>
                    <input name='professionals' type="text" placeholder="professionals" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Fees</span>
                    </label>
                    <input name='fees' type="number" placeholder="fees" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <select name='targetAudience' className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Targeted Audience </option>
                        <option value="Child">Child</option>
                        <option value="Youth">Youth</option>
                        <option value="Older">Older</option>
                    </select>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary" type='submit' value='Add Camp' />
                </div>
            </form>


        </div>
    );
};

export default AddCamp;
/* 

<div className="form-control">
                    <select name='role' className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Register As...</option>
                        <option value="participant">Participant</option>
                        <option value="healthcare professional">Healthcare Professional</option>
                    </select>
                </div>
*/