
const councilData = function() {
  let d = spacetime([2017, 1, 1]);
  d.startOf('year');
  d.minus(1, 'day');
  let arr = [];
  for(let i = 0; i < 365; i += 1) {
    d.add(1, 'day');
    let val = 0;
    if (Math.random() > 0.5) {
      val = Math.random() * 18;
      val = parseInt(val, 10);
    }
    arr.push({
      date: d.d,
      val: val,
    });
  }
  //bloor
  arr[87].val = 5;
  //cuts
  arr[287].val = 5;

  return arr;
};
const queensData = function() {
  let d = spacetime([2017, 1, 1]);
  d.startOf('year');
  d.minus(1, 'day');
  let arr = [];
  for(let i = 0; i < 365; i += 1) {
    d.add(1, 'day');
    let val = 0;
    if (Math.random() > 0.5) {
      val = Math.random() * 4;
      val = parseInt(val, 10);
    }
    arr.push({
      date: d.d,
      val: val,
    });
  }
  //bloor
  arr[87].val = 5;
  //cuts
  arr[287].val = 5;

  return arr;
};
