import Swiper from "swiper";
import 'swiper/css';
import { Navigation } from "swiper/modules";

// init Swiper:
const centeredSwiper = new Swiper(".centeredSwiper", {
    modules: [Navigation],
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".centeredSwiper-next",
        prevEl: ".centeredSwiper-prev",
    },
    breakpoints: {
        1400: {
            slidesPerView: 1.35,
            spaceBetween: 24,
            centeredSlides: true
        }
    }
});