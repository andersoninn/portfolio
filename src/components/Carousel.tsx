import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Image1 from '@/assets/image/projects/carousel/image1.jpg';
import Image2 from '@/assets/image/projects/carousel/image2.jpg';
import Image3 from '@/assets/image/projects/carousel/image3.jpg';

export default function Carousel() {
   return (
      <>
         <Swiper
            pagination={{
               dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper max-w-56 bg-red-200"
         >
            <SwiperSlide className="">
               <Image
                  src={Image1}
                  width={50}
                  height={50}
                  alt=""
                  className="mb-6 rounded-lg"
               />
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  src={Image2}
                  width={50}
                  height={50}
                  alt=""
                  className="mb-6 rounded-lg bg-transparent"
               />
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  src={Image1}
                  width={50}
                  height={50}
                  alt=""
                  className="mb-6 rounded-lg bg-transparent"
               />
            </SwiperSlide>
         </Swiper>
      </>
   );
}
