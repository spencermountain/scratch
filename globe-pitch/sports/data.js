
const jaysData = function() {
  const skydome = 60000;
  let d = spacetime([2017, 1, 1]);
  d.startOf('year');
  d.minus(1, 'day');
  let arr = [];
  for(let i = 0; i < 365; i += 1) {
    d.add(1, 'day');
    let val = 0;
    if (Math.random() > 0.75) {
      val = Math.random() * (skydome * 0.6);
      val += skydome * 0.2;
      val = parseInt(val, 10);
      if (i > 134 && val !== 0) {
        val = val / 2;
      }
    }
    arr.push({
      date: d.d,
      val: val,
      team: 'jays'
    });
  }
  arr = arr.map((a, i) => {
    if (a.team === 'jays' && i > 284 || i < 87) {
      a.val = 0;
    }
    return a;
  });
  //home opener
  arr[87].val = 55000;

  return arr;
};

const leafsData = function() {
  const acc = 19000;
  let d = spacetime([2017, 1, 1]);
  d.startOf('year');
  d.minus(1, 'day');
  let arr = [];
  for(let i = 0; i < 365; i += 1) {
    d.add(1, 'day');
    let val = 0;
    if (Math.random() > 0.75) {
      val = Math.random() * (acc * 0.1);
      val += acc * 0.9;
      val = parseInt(val, 10);
    }
    arr.push({
      date: d.d,
      val: val,
    });
  }
  arr = arr.map((a, i) => {
    if (i > 96 && i < 266) { //i > 96
      a.val = 0;
    }
    return a;
  });
  arr[270].val = acc;
  arr[97].val = acc;
  arr[98].val = acc;
  return arr;
};
const raptorsData = function() {
  const acc = 19000;
  let d = spacetime([2017, 1, 1]);
  d.startOf('year');
  d.minus(1, 'day');
  let arr = [];
  for(let i = 0; i < 365; i += 1) {
    d.add(1, 'day');
    let val = 0;
    if (Math.random() > 0.75) {
      val = Math.random() * (acc * 0.1);
      val += acc * 0.8;
      val = parseInt(val, 10);
    }
    arr.push({
      date: d.d,
      val: val,
    });
  }
  arr = arr.map((a, i) => {
    if (i > 96 && i < 276) {
      a.val = 0;
    }
    return a;
  });
  arr[276].val = acc;
  arr[97].val = acc;
  arr[98].val = acc;
  return arr;
};
