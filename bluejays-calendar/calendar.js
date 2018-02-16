// const isObject = (a) => Object.prototype.toString.call(a) === '[object Object]';
// const isString = (a) => typeof a === 'string';
const isArray = (a) => Object.prototype.toString.call(a) === '[object Array]';

const div = function(a, b, c) {
  if (c) {
    if (isArray(c)) {
      c = c.join('\n');
    }
    return `<div class="${a}" style="${b}">${c}</div>`;
  }
  if (isArray(b)) {
    b = b.join('\n');
  }
  return `<div class="${a}">${b}</div>`;
};

const drawDay = function(d) {
  return div('h4 w4 min-w4 ba', [
    div('flex flex-column pa1', [
      div('f5', d.date()),
      div('f5', d.format('day-short')),
    ])
  ]);
};

window.drawCalendar = function(days) {
  let start = days[0].startOf('week');
  let end = days[days.length - 1].endOf('week');
  let arr = [];
  while (start.isBefore(end)) {
    arr.push(start.clone());
    start = start.add(1, 'day');
  }
  console.log(days.length);
  return div('pa1 flex flex-row flex-wrap h7', arr.map(drawDay));
};
