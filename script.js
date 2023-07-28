
const searchBox = document.getElementById(`movie__searchbox`);
const searchbar = document.getElementById('searchbar');

// searchBox.addEventListener("submit", (event) => {
//     const searchBarValue = searchbar.value; // get the value of the searchbar after submit
//     console.log(searchBarValue); //check the input value
//     event.preventDefault(); //prevent refresh
//     // Store the value in the localStorage then input it in the const searchKey then passsed it in the main();
//     localStorage.setItem("key", searchBarValue); 
//     // const searchKey = localStorage.getItem("key");
//     // main(searchKey);
//     // to show the searchBarValue in the searchTitle
//     // searchTitle.innerHTML = searchBarValue;
//     // console.log(searchbar.value)
// })


// function click () {
//     console.log(window.location)
//     window.location.href = `${window.location.origin}/movies/movies.html`
// }

// check when the form is submitted
searchBox.addEventListener("submit", (event) => {
  const searchBarValue = document.getElementById("searchbar").value;
  event.preventDefault();
  //storing the value of the searchbox and get it on moviescript.js
    localStorage.setItem('key', searchBarValue);
// redirecting to another page and getting the value of the searchBox
//   window.location.href = `${window.location.origin}/movies/movies.html?value=${searchBarValue}`;
  window.location.href = `${window.location.origin}/movies/movies.html`;
});


// tvshows
const swiper1 = document.getElementById('swiper1');
const swiper2 = document.getElementById('swiper2');
const swiper3 = document.getElementById('swiper3');
const swiper4 = document.getElementById('swiper4');
const swiper5 = document.getElementById('swiper5');

async function main (event) {
    const url = `https://www.omdbapi.com/?apikey=39a36280&s=${encodeURI(event)}`;
     const search = await fetch(`${url}`);
    const data = await search.json();
    // console.log(data.Search)
    swiper1.innerHTML = data.Search.map((movie) => swiperHTML(movie)).join("");
}

main('legend');


async function main2 (event) {
    const url = `https://www.omdbapi.com/?apikey=39a36280&s=${encodeURI(event)}`;
     const search = await fetch(`${url}`);
    const data = await search.json();

    
    // console.log(data.Search)
    swiper2.innerHTML = data.Search.map((movie) => swiperHTML(movie)).join("");
}

main2('game');

async function main3 (event) {
    const url = `https://www.omdbapi.com/?apikey=39a36280&s=${encodeURI(event)}`;
     const search = await fetch(`${url}`);
    const data = await search.json();

    
    // console.log(data.Search)
    swiper3.innerHTML = data.Search.map((movie) => swiperHTML(movie)).join("");
}

main3('once');

async function main4 (event) {
    const url = `https://www.omdbapi.com/?apikey=39a36280&s=${encodeURI(event)}`;
     const search = await fetch(`${url}`);
    const data = await search.json();

    
    // console.log(data.Search)
    swiper4.innerHTML = data.Search.map((movie) => swiperHTML(movie)).join("");
}

main4('love');

async function main5 (event) {
    const url = `https://www.omdbapi.com/?apikey=39a36280&s=${encodeURI(event)}`;
     const search = await fetch(`${url}`);
    const data = await search.json();

    
    // console.log(data.Search)
    swiper5.innerHTML = data.Search.map((movie) => swiperHTML(movie)).join("");
}

main5('hunger');


function swiperHTML (movie) {
    return `  <div class="popular__show--poster swiper-slide">
    <figure class="poster__img">
        <img src="${movie.Poster}" alt="">
    </figure>
    <figcaption class="poster__info">
        <h3 class="poster__title">${movie.Title}</h3>
        <p class="poster__year">${movie.Year}</p>
    </figcaption>
</div>`
}

// setTimeout(() => {
//     main('suits');
// });


new Swiper('.swiper', {
    slidesPerView: 7,
    spaceBetween: 12,
    breakpoints: {
        3000: {
            slidesPerView: 7
        },
        1400: {
            slidesPerView: 5, 
            spaceBetween: 0,
        },
        800: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 1.5,
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
    freeMode: {
        enabled: true,
        sticky: true,
    },
    navigation: {
      nextEl: '.nav-next',
      prevEl: '.nav-prev',
    },
    keyboard: true,
    scrollBar: {
        el: '.swiper-scrollbar',
    },
});









function openMenu() {
    document.body.classList += "menu--open";
}
function closeMenu() {
    document.body.classList.remove('menu--open');
}


       


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