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
                // scrollbar= {{draggeble : true}}
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
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                loop={true}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide><Image src="/logos/bmw-logo.png" width={80} height={80} /></SwiperSlide>
                <SwiperSlide><Image src="/logos/ford-logo.png" width={120} height={80} /></SwiperSlide>
                <SwiperSlide><Image src="/logos/logo-audi.jpg" width={80} height={80} /></SwiperSlide>
                <SwiperSlide><Image src="/logos/logo-honda.jpg" width={80} height={80} /></SwiperSlide>
                <SwiperSlide><Image src="/logos/logo-volvo.jpg" width={80} height={80} /></SwiperSlide>
                <SwiperSlide><Image src="/logos/mazda-logo.png" width={80} height={80} /></SwiperSlide>
                <SwiperSlide><Image src="/logos/nissan-logo.png" width={80} height={80} /></SwiperSlide>
            </Swiper>
        </SC.WrapperSwiper>
    )

}