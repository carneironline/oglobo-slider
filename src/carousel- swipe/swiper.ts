import Swiper from 'swiper/bundle';
import type { SwiperOptions } from 'swiper/types';

import './swiper.css';

const swiperParams: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: false,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
};

new Swiper('.swiper', swiperParams);
