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
    bulletClass: 'button--pagination',
    bulletElement: 'button',
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
  spaceBetween: 10,
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

const trainingSwiper = new Swiper('.training__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  initialSlide: 2,
  modules: [Navigation],
  navigation: {
    nextEl: '.training__button--next',
    prevEl: '.training__button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
      initialSlide: 0,
    },
  }
});

const reviewsSwiper = new Swiper('.reviews__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  modules: [Navigation],
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  autoHeight: true,
  breakpoints: {
    768: {
      slidesPerView: 1.34,
      spaceBetween: 30,
      centeredSlides: true,
      centeredSlidesBounds: true,
      slidesOffsetBefore: 45,
      slidesOffsetAfter: 45,
    },
    1440: {
      slidesPerView: 1.9,
      spaceBetween: 120,
      centeredSlides: true,
      centeredSlidesBounds: true,
      slidesOffsetBefore: 130,
      slidesOffsetAfter: 130,
    },
  }
});

const advSwiper = new Swiper('.adv__swiper', {
  noSwiping: true,
  noSwipingClass: 'swiper-slide',
  modules: [Navigation],
  navigation: {
    nextEl: '.adv__button--next',
    prevEl: '.adv__button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      loop: true,
      initialSlide: 2,
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      loopAddBlankSlides: false,
      slidesOffsetBefore: 120,
    },
  }
});
