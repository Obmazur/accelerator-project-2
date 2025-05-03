// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

let heroSwiper;
let toursSwiper;
let trainingSwiper;
let reviewsSwiper;
let gallerySwiper;

const initSwipers = () => {
  heroSwiper = new Swiper('.hero__swiper', {
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

  toursSwiper = new Swiper('.tours__swiper', {
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

  trainingSwiper = new Swiper('.training__swiper', {
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

  reviewsSwiper = new Swiper('.reviews__swiper', {
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

  gallerySwiper = new Swiper('.gallery__swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 5,
    noSwiping: false,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
        noSwiping: false,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 5,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
      },
    }
  });
};

const breakpointDesktop = window.matchMedia('(min-width: 1440px)');

let advSwiper;

const initAdvSwiper = () => {
  advSwiper = new Swiper('.adv__swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.adv__button--next',
      prevEl: '.adv__button--prev',
    },
    loop: true,
    initialSlide: 2,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
  });
};

breakpointDesktop.addEventListener('change', () => {
  if (window.innerWidth >= 1440) {
    initAdvSwiper();
  } else {
    advSwiper.destroy();
  }
});

window.addEventListener('load', () => {
  if (breakpointDesktop.matches) {
    initAdvSwiper();
  }

  initSwipers();
  heroSwiper.init();
  toursSwiper.init();
  trainingSwiper.init();
  reviewsSwiper.init();
  gallerySwiper.init();
});
