import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import img1 from '../../../bannarImage/banner1.png';
import img2 from '../../../bannarImage/banner2.png';
import img3 from '../../../bannarImage/banner3.png';
import img4 from '../../../bannarImage/banner4.png';
const Banner = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt='not found'/></SwiperSlide>
                <SwiperSlide><img src={img2} alt='not found'/></SwiperSlide>
                <SwiperSlide><img src={img3} alt='not found'/></SwiperSlide>
                <SwiperSlide><img src={img4} alt='not found'/></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;