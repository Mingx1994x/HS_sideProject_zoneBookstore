import Swiper from "swiper";
import 'swiper/css';
import { Navigation } from "swiper/modules";

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