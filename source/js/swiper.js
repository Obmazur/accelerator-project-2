// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const heroSwiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  modules: [Pagination],
  pagination: {
    el: '.hero__pagination',
    clickable: false,
    bulletActiveClass: 'button--pagination-active',
    bulletClass: 'button--pagination'
  },
  breakpoints: {
    1440: {
      pagination: {
        clickable: true,
      },
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
    },
  }
});

const toursSwiper = new Swiper('.tours__swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  modules: [Navigation],
  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});
