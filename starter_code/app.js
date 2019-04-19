
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// our index Route (GET)
app.get('/', (req, res, next) => {
  res.render('index');
});

// // our first Route:
// app.get('/', (request, response, next) => {
//   response.render('home');
// });

// beers route:
app.get('/beers', (request, response, next) => {
  punkAPI.getBeers()
      .then(punkBeers => {  
        response.render('beers', {
          beers: punkBeers
        })
      })
      .catch(error => {
        console.log("DEBUG ERROR",error)
      });
  })


// random beers route:
app.get('/random-beer', (request, response, next) => {
  punkAPI.getRandom()
    .then(beers => {  
          console.log('DEBUG beers', beers)
          //render views/one-beer.hbs" and give a variable "beer" that is beer[0]"
          response.render('random-beer',{
              randomBeer: beers[0]
              })
        })
      .catch(error => {
          console.log(error)
        })
  // response.render('random-beer');
});


app.listen(3000);