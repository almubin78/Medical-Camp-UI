import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// import img1 from '../../../bannarImage/banner1.png';
import img2 from '../../../bannarImage/banner2.png';
import img3 from '../../../bannarImage/banner3.png';
import img4 from '../../../bannarImage/banner4.png';
const Banner = () => {
    const imgCollection = [
        // img1,img2,img3,img4
       img2,img3,img4
    ]
    return (
        <>
            <Swiper
                 slidesPerView={1}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
                 spaceBetween={30}
                 // effect={'fade'}
                 navigation={true}
                 autoplay={{
                     delay: 1000,
                     disableOnInteraction: false,
                 }}
                 modules={[EffectFade, Navigation, Pagination]}

                
             className="swiper"
            >
                {
                    // imgCollection.map((img,ind)=><SwiperSlide key={ind}><img src={img} className="h-full w-full object-cover"  alt='not found' /></SwiperSlide>)
                    imgCollection.map((img,ind)=><SwiperSlide key={ind}><img src={img} className='min-h-[250px] max-h-[450px] mx-auto'  alt='not found' /></SwiperSlide>)
                }
                
            </Swiper>
        </>
    );
};

export default Banner;