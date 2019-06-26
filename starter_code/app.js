const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
  .then(beers => {
    res.render('beers', {
      myBeers: beers
    } );
  })
  .catch(error => {
    res.render('error');
  });
});

app.get('/random-beers', (req,res,next) => {
  punkAPI.getRandom()
  .then(beer => {
    res.render('random-beer', {
      randomBeer: beer[0]
    });
  })
  .catch(error => {
    res.render('error');
  })
}); 

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log("App running on http://localhost:3000");
});
