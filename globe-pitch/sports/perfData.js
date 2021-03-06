const leaf1Perf = function() {
  let arr = [];
  let d = spacetime([2017, 1, 1]);
  let vals = '7,8,7,6,7,8,7,6,5,6,5,4,3,2,1,2,1,2,3,2,3,2,3,2,1,0,-1,-2,-1,0,1,2,3,2,1,2,3,4,5,6,5,6,7,6,7,8,7,8,9,8,9,8,9,8,9,10,11,12,13,12,11,10,9,8,9,10,9,10,11,12,11,10,11,10,11,10,9,10,9,10,11,10,9,8,9,10,11,12,11,12,11,11,10,9,10,9,10,9,10,11,12';
  vals = vals.split(',');
  d.startOf('year');
  d.minus(1, 'day');
  //add season-end
  for(let i = 0; i < 96; i += 1) { //(i > 284 || i < 87)
    d.add(1, 'day');
    arr.push({
      date: d.d,
      val: vals[arr.length] || 0,
    });
  }
  return arr;
};
//add season-start
const leaf2Perf = function() {
  let arr = [];
  let vals = '-1,-2,-1,-2,-1,0,1,0,-1,0,1,2,1,0,1,2,1,0,1,2,3,2,1,0,1,2,3,4,5,6,7,6,5,4,3,4,5,4,3,2,3,2,3,2,1,2,1,2,1,2,1,2,3,4,5,4,3,4,5,6,5,4,5,4,3,4,5,6,5,4,3,4,5,6,5,6,5,4,3,4,4,5,4,5,4,5,6';
  vals = vals.split(',');
  d = spacetime([2017, 9, 3]);
  for(let i = 284; i < 365; i += 1) { //(i > 284 || i < 87)
    d.add(1, 'day');
    arr.push({
      date: d.d,
      val: vals[arr.length] || 0,
    });
  }
  return arr;
};
const raptor1Perf = function() {
  let arr = [];
  let d = spacetime([2017, 1, 1]);
  let vals = '7,8,7,8,9,8,8,9,10,9,8,7,8,7,6,5,4,5,4,3,4,5,6,5,6,7,8,7,6,5,6,5,6,5,5,4,5,6,7,6,5,5,6,7,6,7,8,7,7,8,6,5,4,3,2,1,1,1,2,3,2,3,3,4,5,6,5,6,7,8,9,8,9,8,7,7,8,9,10,9,10,11,10,9,8,9,9,11,10,9,9,8,7,6,5,6,5,4,5,6,5';
  vals = vals.split(',');
  d.startOf('year');
  d.minus(1, 'day');
  //add season-end
  for(let i = 0; i < 95; i += 1) { //(i > 284 || i < 87)
    d.add(1, 'day');
    arr.push({
      date: d.d,
      val: vals[arr.length] || 0,
    });
  }
  return arr;
};
//add season-start
const raptor2Perf = function() {
  let arr = [];
  let vals = '0,1,1,2,1,2,3,3,2,1,1,2,1,0,-1,-2,-1,0,-1,0,1,2,1,0,1,2,1,1,2,1,2,2,3,4,3,4,5,6,7,6,7,6,6,5,4,5,6,7,6,5,6,5,4,3,2,2,2,3,4,3,3,2,2,2,1,2,3,2,1,2,3,2,1,2,3,4,5,4,3,4,5,6,7,5,4,5,6';
  vals = vals.split(',');
  d = spacetime([2017, 9, 3]);
  for(let i = 284; i < 365; i += 1) { //(i > 284 || i < 87)
    d.add(1, 'day');
    arr.push({
      date: d.d,
      val: vals[arr.length] || 0,
    });
  }
  return arr;
};

const jayPerf = function() {
  let vals = '-1,0,-1,0,-1,-2,-3,-2,-1,0,-1,-2,-1,-2,-3,-2,-1,-2,-3,-2,-3,-4,-5,-6,-7,-6,-7,-8,-7,-6,-7,-8,-7,-6,-5,-6,-7,-8,-7,-8,-9,-10,-9,-10,-9,-10,-11,-10,-9,-8,-9,-8,-9,-10,-9,-10,-11,-10,-11,-10,-11,-10,-9,-10,-9,-8,-9,-10,-11,-10,-11,-12,-13,-14,-15,-14,-13,-14,-15,-16,-15,-14,-15,-14,-13,-12,-11,-10,-11,-10,-11,-10,-11,-12,-11,-12,-11,-10,-11,-12,-11,-12,-13,-12,-13,-14,-15,-14,-15,-16,-15,-14,-13,-14,-15,-14,-13,-12,-11,-10,-11,-10,-11,-10,-9,-10,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-17,-18,-19,-18,-19,-20,-19,-18,-19,-20,-19,-18,-17,-16,-17,-16,-17,-18,-17,-18,-19,-18,-19,-20,-21,-20,-21,-20,-21,-20,-21,-20,-21,-20,-21,-22,-23,-24,-23,-24,-25,-26,-25,-24,-25,-26,-27,-26,-27,-26,-27,-28,-27,-26,-27,-28,-27,-26,-27,-28,-29,-28,-28,-27'.split(',');
  let arr = [];
  let d = spacetime([2017, 2, 28]);
  //add season-end
  for(let i = 87; i < 284; i += 1) {
    d.add(1, 'day');
    arr.push({
      date: d.d,
      val: vals[arr.length] || 0,
    });
  }
  return arr;
};
