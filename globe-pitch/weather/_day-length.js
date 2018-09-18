const spacetime = require('spacetime');
const daylight = require('spacetime-daylight');
spacetime.extend(daylight);
let days = [];

let d = spacetime([2017, 1, 1]).startOf('year');
for(let i = 0; i < 365; i += 1) {
  d.add(1, 'day');
  let mins = d.daylight().duration.inMinutes;
  days.push(mins);
}
console.log(JSON.stringify(days, null, 2));
