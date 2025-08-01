import Swiper from 'swiper/bundle';
import type { SwiperOptions } from 'swiper/types';

import 'swiper/swiper-bundle.css';
import './style.css';
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

new Swiper('.swiper', swiperParams);
