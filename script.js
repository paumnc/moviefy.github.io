new Swiper('#swiper-1', {
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

// new Swiper('#swiper-1', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     // Optional parameters
//     // direction: 'horizontal',
//     // loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });