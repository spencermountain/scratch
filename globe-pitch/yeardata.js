const minTemp = [
  -30,
  -20,
  -5,
  10,
  15,
  20,
  22,
  24,
  22,
  20,
  10,
  0,
  -5,
];
const temperature = function() {
  const noise = 14;
  let arr = [];
  for(let i = 0; i < 365; i += 1) {
    let month = Math.floor(i / 31);
    let val = Math.random() * noise;
    val += minTemp[month];
    val = parseInt(val, 10);
    arr.push(val);
  }
  arr[240] = 38;
  arr[15] = -35;
  return arr;
};

const traffic = function() {
  const noise = 0.12;
  let arr = [];
  for(let i = 0; i < 365; i += 1) {
    let val = Math.random() * noise;
    val = val - 0.03;
    // val = parseInt(val, 10);
    arr.push(val);
  }
  //march break
  arr[73] = 0;
  arr[73] = -0.05;
  arr[74] = -0.1;
  arr[75] = -0.08;
  arr[76] = -0.1;
  arr[77] = -0.05;
  arr[78] = -0.07;
  arr[79] = -0.05;
  arr[79] = -0.1;
  //christmas
  arr[350] = -0.08;
  arr[352] = -0.12;
  arr[353] = -0.13;
  arr[354] = -0.12;
  arr[355] = -0.1;
  arr[356] = -0.12;
  arr[357] = -0.1;
  arr[358] = -0.13;
  arr[359] = -0.12;
  arr[360] = -0.1;
  arr[361] = -0.12;
  //yoghurt
  arr[173] = 0.32;
  //snow pileup
  arr[18] = 0.20;

  return arr;
};

window.yearData = {
  temperature: temperature(),
  traffic: traffic()
};
