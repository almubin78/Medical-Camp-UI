import Comment from "./AdditionalPages/Comment";
import Banner from "./Banner";
import PopularCamps from "./PopulerCamps";
import Testimonials from "./Testimonials";


const HomeContainer = () => {
    return (
        <div>
            <Banner/>
            <div className="divider">Popular medical camp section</div>
            <PopularCamps/>
            <div className="divider">Testimonials</div>
            <Testimonials/>
            <div className="divider">Comment</div>
            <Comment/>
            <div className="divider"></div>
        </div>
    );
};

export default HomeContainer;