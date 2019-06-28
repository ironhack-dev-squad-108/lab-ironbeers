let getBeers = document.getElementById("get-beers");
let getRandomBeer = document.getElementById("get-random-beer");

console.log(getBeers);

getBeers.addEventListener("click", function() {
  window.location = "/beers";
});

getRandomBeer.addEventListener("click", function() {
  window.location = "/random-beer";
});
