var cities = require('all-the-cities');
var countries = require('./countries');

var twoCodes = countries.reduce((h, o) => {
  h[o['alpha-2']] = o.name;
  return h;
}, {});

cities = cities.filter((o) => o.population > 500000);

cities = cities.reduce((h, o) => {
  let country = twoCodes[o.country] || o.country;
  let name = `${o.name}, ${country}`;
  h[name] = [
    o.lat,
    o.lon
  ];
  return h;
}, {});

// console.log(JSON.stringify(cities, null, 2));
module.exports = cities;
