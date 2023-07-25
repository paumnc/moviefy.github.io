

new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 12,
    breakpoints: {
        1400: {
            slidesPerView: 4, 
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 1,
        }
    },
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction:false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true,
    navigation: {
      nextEl: '.nav-next',
      prevEl: '.nav-prev',
    },
    keyboard: true,
});

function openMenu() {
    document.body.classList += "menu--open";
}
function closeMenu() {
    document.body.classList.remove('menu--open');
}
// async function main (event) {
//     const url = `https://www.omdbapi.com/?apikey=39a36280&s=${encodeURI(event)}`;
//      const search = await fetch(`${url}`);
//     const data = await search.json();
//     // console.log(data.Search)
   
//     movieListEl.innerHTML = data.Search.map((movie) => movieHTML(movie)).join("");

// }

// main();

// function movieHTML (details) {
//     return `<div class="shows__content">
//         <figure class="shows__poster">
//             <img src="${details.Poster}" alt="" class="poster">
//         </figure>
//            <div class="poster__description">
//             <h4 class="poster__title">${details.Title}</h4>
//             <p class="poster__year">${details.Year}</p>
//         </div>
//     </div>
//         `
//     }
       


// function browsingMovies(event){
//     localStorage.setItem("key", event.target.search.value);

//     console.log(event.target.search.value)
// }


// new Swiper('#swiper-2', {
//     slidesPerView: 1.5,
//     centeredSlides: true,
//     spaceBetween: 12,
//     lazyLoading: true,
//     loop: true,
//     keyboard: {
//         enabled: true
//     },
//     navigation: {
//         nextEl: '#nav-right',
//         prevEl: '#nav-left',
//     },
//     pagination: {
//         el:('#swiper-2 .swiper-custom-pagination'),
//         clickable: true,
//         renderBullet: function (index, className) {
//             return `<div class=${className}><span class='number'>${index + 1}</span>
//             <span class="line"></span></div>`
//         }
//     }
// })

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
//   });http://127.0.0.1:5500/Assets/sunset_dream_poster.svg