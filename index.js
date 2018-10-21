const fetch = require("node-fetch");

const url = "https://www.imdb.com/find?s=tt@ttype=ft&ref_=fn+ft&q=";

function searchMovies(searchTerm) {
  return fetch(`${url}${searchTerm}`).then(res => res.text());
}

searchMovies("star wars").then(body => {
  console.log(body);
});
