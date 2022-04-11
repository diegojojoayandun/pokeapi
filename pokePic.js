#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const options = {
  method: 'GET',
  url: 'https://pokeapi.co/api/v2/pokemon?limit=151' // API Endpoint
};

request(options, (error, response, body) => (error) ? console.error(error) : pokePics(JSON.parse(body))); // first request: gets the url with the  pokemon info

// function, downloads the pokemon's picture
function pokePics (oPokemons) {
  const pokemon = oPokemons.results.filter((entries) =>
    entries.name === process.argv[2]);

  let pokeurl = '';
  for (const i in pokemon) {
    pokeurl = pokemon[i].url;
  }

  request(pokeurl,
    (error, response, body) =>
      (error)
        ? console.error(error)
        : request(JSON.parse(body).sprites.back_default).pipe(fs.createWriteStream(process.argv[2].concat('.png')))); // secomd request: gets pokemon's pic url
}
