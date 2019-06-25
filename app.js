const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const PunkAPIWrapper = require("punkapi-javascript-wrapper");
const punkAPI = new PunkAPIWrapper();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));

//  index.html

app.get("/", (req, res, next) => {
  // Render the view "/views/index.hbs"
  res.render("index", {});
});

// beers.html

app.get("/beers", (req, res, next) => {
  punkAPI
    .getBeers()
    .then(beers => {
      res.render("beers", {
        beers: beers
      });
    })
    .catch(error => {
      console.log(error);
    });
});

//random-beer.html

app.get("/random-beer", (req, res, next) => {
  punkAPI
    .getRandom()
    .then(beer => {
      console.log(beer)
      res.render("random-beer", {
        beer: beer
      });
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(3000);
