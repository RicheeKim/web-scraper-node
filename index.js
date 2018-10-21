const fetch = require("node-fetch");

const url = "https://www.imdb.com/find?s=tt@ttype=ft&ref_=fn+ft&q=";

function searchMovies(searchTerm) {
  fetch(`${url}${searchTerm}`).then(res => res.text());
}
