import Swiper from 'swiper/bundle';
import type { SwiperOptions } from 'swiper/types';

import 'swiper/css/bundle';
import './swiper.css';
import './card.css';

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

const swiper = new Swiper('.swiper', swiperParams);
