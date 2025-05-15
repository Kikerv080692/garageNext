import React from 'react';
import * as SC from './Brands.styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

export default function Brands() {
    return (
        <SC.WrapperBrands>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
            >
                {/* Вставляй сюди свої логотипи */}
                <SwiperSlide><img src="/logos/logo-honda.jpg" alt="Brand 1" /></SwiperSlide>
                <SwiperSlide><img src="/logos/logo-hundai.jpg" alt="Brand 2" /></SwiperSlide>
                <SwiperSlide><img src="/logos/mazda-logo.png" alt="Brand 3" /></SwiperSlide>
                {/* ... */}
            </Swiper>
        </SC.WrapperBrands>
    );
}
