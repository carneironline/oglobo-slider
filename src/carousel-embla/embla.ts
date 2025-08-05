import EmblaCarousel from 'embla-carousel';
import type { EmblaOptionsType } from 'embla-carousel';
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton';

import './embla.css';

const emblaNode = document.querySelector('.embla') as HTMLElement;
const viewportNode = emblaNode.querySelector('.embla__viewport') as HTMLElement;
const dotsNode = emblaNode.querySelector('.embla__dots') as HTMLElement;

const options: EmblaOptionsType = { loop: false, slidesToScroll: 'auto', duration: 60, dragFree: true };

if (emblaNode instanceof HTMLElement) {
    const emblaApi = EmblaCarousel(viewportNode, options);

    const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(emblaApi, dotsNode);

    emblaApi.on('destroy', removeDotBtnsAndClickHandlers);
    console.log(emblaApi.slideNodes()); // Access API
} else {
    console.error('Embla node not found or not an HTMLElement.');
}
