const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 6,
  spaceBetween: 150,
  breakpoints: {
    // when window width is >= 640px
    1024: {
    slidesPerView: 6,
    spaceBetween: 100
    },
  },
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  freeMode: true,
  speed: 5000,
  freeModeMomentum: true,

  
});
const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 6,
  spaceBetween: 150,
  breakpoints: {
    // when window width is >= 640px
    1024: {
    slidesPerView: 6,
    spaceBetween: 100
    },
  },
  autoplay: {
    delay: 1,
    reverseDirection: true,
    disableOnInteraction: false
  },
  freeMode: true,
  speed: 5000,
  freeModeMomentum: true,

  
});

// Responsive breakpoints
// breakpoints: {
  // when window width is >= 320px
  // 320: {
  //   slidesPerView: 2,
  //   spaceBetween: 20
  // },
  // when window width is >= 480px
  // 480: {
  //   slidesPerView: 3,
  //   spaceBetween: 30
  // },
  // when window width is >= 640px
//   640: {
//     slidesPerView: 4,
//     spaceBetween: 40
//   }
// },