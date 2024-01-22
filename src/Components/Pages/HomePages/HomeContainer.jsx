import Comment from "./AdditionalPages/Comment";
import Banner from "./Banner";
import PopularCamps from "./PopulerCamps";
import Testimonials from "./Testimonials";


const HomeContainer = () => {
    return (
        <div>
            <Banner/>
            <div className="divider"></div>
            <PopularCamps/>
            <div className="divider"></div>
            <Testimonials/>
            <div className="divider"></div>
            <Comment/>
            <div className="divider"></div>
        </div>
    );
};

export default HomeContainer;