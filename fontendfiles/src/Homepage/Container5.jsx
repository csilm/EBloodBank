import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const Container5 = () => {
  return (
    <div className='w-full h-[15rem] flex flex-wrap justify-center items-center'>
        <div className='w-full h-auto flex flex-wrap flex-col justify-center items-center'>
            <div className='h-14 w-14 rounded-full bg-red-600'></div>
            <h1 className='font-bold text-red-600 p-3' >HOW DONATION WORKS</h1>
        </div>
      <Swiper
        spaceBetween={25}
        centeredSlides={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper" >
        <SwiperSlide>
          <div className="object-fill w-full h-[6rem] w-full h-auto flex flex-wrap flex-col justify-center items-center">
          <div className='h-14 w-14 rounded-full bg-red-600'></div>
          <div className='text-xs p-2'>There is nothing better than saving a life  Every blood donor is a hero, <span className='text-red-500 font-bold'> Read Blood Donation Facts</span></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="object-fill w-full h-[6rem] w-full h-auto flex flex-wrap flex-col justify-center items-center">
          <div className='h-14 w-14 rounded-full bg-red-600'></div>
          <div className='text-xs p-2'>It Takes Only an Hour Donate blood save lives !<span className='text-red-500 font-bold'> Read Blood Donation Facts</span></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="object-fill w-full h-[6rem] w-full h-auto flex flex-wrap flex-col justify-center items-center">
          <div className='h-14 w-14 rounded-full bg-red-600'></div>
          <div className='text-xs p-2'>You will get free refreshments <span className='text-red-500 font-bold'>after donation Donation of blood is safe and healthy, Read Blood Donation Facts</span></div>
          </div>
        </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Container5
