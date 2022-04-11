#!/usr/bin/node
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://pokeapi.co/api/v2/pokemon?limit=151' // API Endpoint
};

// request(options, (error, response, body) => (error) ? console.error(error) : console.log(pokeNames(JSON.parse(body))));
request(options, (error, response, body) =>
  (error)
    ? console.error(error)
    : console.log(JSON.parse(body).results.map((entries) => entries.name)));

// function pokeNames(oPokemons){
//     return oPokemons.results.map((entries) => entries.name)
// }
