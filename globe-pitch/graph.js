const addDays = function(data) {
  let d = spacetime([2017, 1, 1]);
  d.startOf('year');
  return data.map((val) => {
    d.add(1, 'day');
    return {
      date: d.d,
      close: val
    };
  });
};


window.makeGraph = function(svg, data, max, min, notes, yFormat) {
  var margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  };
  data = addDays(data);
  var width = +svg.attr('width') - margin.left - margin.right;
  var height = +svg.attr('height') - margin.top - margin.bottom;
  var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  var x = d3.scaleTime().rangeRound([0, width]);
  var y = d3.scaleLinear().rangeRound([0, height]);

  var line = d3.line()
    .x(function(d) {
      return x(d.date);
    })
    .y(function(d) {
      return y(d.close);
    });

  x.domain([new Date('2017-01-01'), new Date('2017-12-30')]);
  y.domain([max, min]);
  let xAxis = d3.axisBottom(x);
  xAxis.tickFormat(d3.timeFormat('%b'));

  g.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .attr('fill', 'slategrey')
    .call(xAxis)
    .select('.domain')
    .remove();

  let yAxis = d3.axisLeft(y);
  yAxis.ticks(6);
  if (yFormat) {
    yAxis.tickFormat(d3.format(yFormat));
  }
  g.append('g')
    .call(yAxis)
    .attr('fill', 'slategrey')
    .select('.domain')
    .remove();

  g.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'lightsteelblue')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.8)
    .attr('d', line);

  addAnnotations(svg, x, y, notes);
};
