import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../Components/banner.css";
import "../Components/style.css";
import slideimgone from '../assets/hr-1.jpg'
import slideimgtwo from '../assets/hr-2.jpg'
import slideimgthree from '../assets/hr-3.jpg'
import slideimgfour from '../assets/hr-4.jpg'
import slideimgfive from '../assets/hr-5.jpg'
const Banner = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slideimgone} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimgtwo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimgthree}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimgfour} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimgfive}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
