const eventClick = document.querySelector("#button-addon2");
eventClick.addEventListener("click", async function () {
  const inputValue = document.querySelector("#myValue");
  const movies = await getMovies(inputValue.value);
  const moviesUI = getMoviesUI(movies);
});

function getMovies(keyword) {
  return fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&apiKey=2d7711600cde489a8ef98e45f688bf3b`
  )
    .then((response) => response.json())
    .then((response) => response.articles);
}

function getMoviesUI(movies) {
  let card = "";
  movies.map((e) => (card += showsCard(e)));

  const innerMovies = document.querySelector(".data-berita");
  innerMovies.innerHTML = card;
}

function showsCard(e) {
  return `
  <div class="col-md-3 my-5">
  <div class="card">
  <img src="${e.urlToImage}" class="card-img-top" />
  <div class="card-body">
      <h5 class="card-title">${e.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${e.publishedAt}</h6>
    
  </div>
  </div>
  </div>
`;
}
