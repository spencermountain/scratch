
let arr = [];
const doRows = function(rows) {
  for(let i = 0; i < rows.length; i += 1) {
    let date = rows[i].querySelector('.col1').innerText.trim();
    let val = rows[i].querySelector('.col2').innerText.trim();
    arr.push([date, val]);
  }
};

const getData = function() {
  let tables = document.querySelectorAll('.histDataTable');
  let left = tables[tables.length - 2];
  let rows = left.querySelectorAll('tr');
  doRows(rows);
  let right = tables[tables.length - 1];
  rows = right.querySelectorAll('tr');
  doRows(rows);
};

const doAll = function() {
  setTimeout(function() {
    getData();
    let nextBtn = document.querySelector('.nextBtn');
    if (nextBtn === null) {
      console.log(arr);
      return;
    }
    document.querySelector('.nextBtn').click();
    doAll();
  }, 500);
};
