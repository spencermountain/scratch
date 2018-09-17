const fakeData = function(max, min, dates) {
  let diff = max - min;
  let arr = [];
  let d = spacetime([2017, 0, 1]);
  for(let i = 0; i < 365; i += 1) {
    let val = Math.random() * diff;
    val += min;
    val = parseInt(val, 10);
    d.add(1, 'day');
    arr.push({
      close: val,
      date: d.format('iso')
    });
  }
  return arr;
};

window.yearData = fakeData(20, -20, []);
console.log(yearData);
