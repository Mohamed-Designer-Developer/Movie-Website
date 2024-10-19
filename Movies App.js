//initialize constants
const MOVIE_API_KEY = `ae8115887a332015cc3739c9ecb9b70d`;

const API_URL = `https://api.themoviedb.org/3/movie/popular?`;

const IMAGE_URL = `https://image.tmdb.org/t/p/w1080`;

// select dom Elements

let mostPopularDocument = document.querySelector(".movie-container");
//let movie =document.querySelector('.movie')
let moviemodal =document.querySelector(".modal-container")
let close =document.querySelector(".close-icon")
let movietitle=document.querySelector(".movie-title")
let moviedetail=document.querySelector(".movie-detail")

mostPopularDocument.addEventListener("click" , (event) => {
    if (event.target.classList[0] === "movie-image"){

      moviedetail.innerHTML = event.target.parentElement.children[0].value;
      movietitle.innerHTML = event.target.parentElement.children[2].children[0].textContent;

      moviemodal.classList='modal-container show'
    } 
})

close.addEventListener("click" , () => {

    moviemodal.classList ="modal-container hide"
})


moviemodal.addEventListener("click" , () => {
  moviemodal.classList ="modal-container hide"
})

const biuldTheDom = (movies) => {

    mostPopularDocument.innerHTML = "";

    movies.forEach(movie => {

        mostPopularDocument.innerHTML += `
        <div class="movie">
        <input type="hidden" value="${movie.overview}">
        <img class="movie-image" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
       <div class="info">
        <span class="movie-title">${movie.original_title}</span>
        </div>
        </div>
    </div>`
    
        }) }

const getMostPopularMoviews = async () => {

    const request = await fetch(`${API_URL}api_key=${MOVIE_API_KEY}&page=1`);

    const { results } = await request.json();
    console.log(results)

    biuldTheDom(results);
}

getMostPopularMoviews();