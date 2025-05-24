"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as SC from './Brands.styled'
import { useTranslation } from 'react-i18next'


export default function Brands() {
    const {t} = useTranslation()
    return (
        <SC.WrapperSwiper>
            <h1>{t('swiper.tittle')}</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                navigation={true}
                pagination={{ clickable: true }}
                
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,   
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
                loop={true}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide><Image src="/logos/bmw-logo.png" width={80} height={80} alt="logo" /></SwiperSlide>
                <SwiperSlide><Image src="/logos/8.png" width={80} height={80} alt="logo" /></SwiperSlide>
                <SwiperSlide><Image src="/logos/5.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/jeep.png" width={80} height={80}alt="logo" /></SwiperSlide>
                <SwiperSlide><Image src="/logos/nissan-logo.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/Skoda-logo.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/volkswagen-logo.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/21.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/29.png" width={80} height={80}alt="logo" /></SwiperSlide>
                <SwiperSlide><Image src="/logos/13.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/32.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/15.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/22.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/1.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/33.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/16.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/17.png" width={80} height={80} alt="logo"/></SwiperSlide>
                <SwiperSlide><Image src="/logos/23.png" width={80} height={80} alt="logo"/></SwiperSlide>
            </Swiper>
        </SC.WrapperSwiper>
    )

}