// const apikey = '39a36280';
// const searchUrl = `https://www.omdbapi.com/?apikey=39a36280&t=${movieSample}`
// https://www.youtube.com/watch?v=1VjdxCTBfUI

const searchBox = document.getElementById(`movie__searchbox`);
const searchbar = document.getElementById('searchbar');
const movieListEl = document.querySelector('.shows');
const searchTitle = document.querySelector('.search__content');
const loading = document.querySelector('.loading');
// const urlParams = new URLSearchParams(window.location.search);
// const value = urlParams.get('value');
const searchKey = localStorage.getItem('key');


async function main (event) {
    const url = `https://www.omdbapi.com/?apikey=39a36280&s=${encodeURI(event)}`;
     const search = await fetch(`${url}`);
     const data = await search.json();

    // console.log(data.Search)
    movieListEl.innerHTML = data.Search.slice(0, 6).map((movie) => movieHTML(movie)).join("");
}

main(searchKey);
 

// check when the form is submitted
searchBox.addEventListener("submit", (event) => {
    const searchBarValue = searchbar.value; // get the value of the searchbar after submit
    console.log(searchBarValue); //check the input value
    event.preventDefault(); //prevent refresh
    // Store the value in the localStorage then input it in the const searchKey then passsed it in the main();
    // localStorage.setItem("key", searchBarValue); 
    // const searchKey = localStorage.getItem("key");
    // main(searchKey);

    main(searchBarValue); 
    // to show the searchBarValue in the searchTitle
    searchTitle.innerHTML = searchBarValue;
    // console.log(searchbar.value)
})



function movieHTML (details) {
return `<div class="shows__content">
    <figure class="shows__poster">
        <img src="${details.Poster}" alt="" class="poster">
    </figure>
       <div class="poster__description">
        <h4 class="poster__title">${details.Title}</h4>
        <p class="poster__year">${details.Year}</p>
    </div>
</div>
    `
}
    

// onsubmit="browsingMovies(event)"; 

// function findMovies() {
   //  onkeyup="findMovies()"
//     let searchTerm = (searchBox.value).trim();
//     console.log(searchTerm);
//     main(searchTerm);
// }




function openMenu() {
    document.body.classList += "menu--open";
}
function closeMenu() {
    document.body.classList.remove('menu--open');
}