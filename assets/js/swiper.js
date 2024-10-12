import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const centeredSwiper = new Swiper(".centeredSwiper", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".centeredSwiper-next",
        prevEl: ".centeredSwiper-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 1.5,
        },
        1200: {
            slidesPerView: 1.85,
        }
    }
});

// free-mode
const freeModeSwiper = new Swiper(".freeMode-swiper-1", {
    modules: [Pagination],
    slidesPerView: 1.8,
    spaceBetween: 12,
    freeMode: true,
    loop: true,
})

// cardSwiper
const cardSwiper = new Swiper(".cardSwiper-1", {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 12,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".cardSwiper-pagination",
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        }
    }
});