import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Img from './MBD_banner.webp';
import Img1 from './ONE_NATION_2500_600.webp';
import Img2 from './updated_NewYear2022.webp';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Container1 = () => {
  
  return (
    <div className='w-full h-auto flex flex-wrap justify-center items-center'>
    <Swiper
        spaceBetween={25}
        centeredSlides={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper" >
        <SwiperSlide>
            <img
            className="object-fill w-full h-auto"
                src={Img}
                alt="image slide 1" />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-fill w-full h-auto"
                src={Img1}
                alt="image slide 2"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-fill w-full h-auto"
                src={Img2}
                alt="image slide 3"
            />
        </SwiperSlide>
    </Swiper>
</div>
  )
}

export default Container1