
window.trafficGraph = function(svg, data, max, min, notes, yFormat) {
  var width = +svg.attr('width') - margin.left - margin.right;
  var height = +svg.attr('height') - margin.top - margin.bottom;
  var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  //scale our data
  data = addDays(data);
  var x = d3.scaleTime().rangeRound([0, width]);
  var y = d3.scaleLinear().rangeRound([0, height]);
  x.domain([new Date('2017-01-02'), new Date('2017-12-31')]);
  y.domain([max, min]);

  //draw x-axis
  // let xAxis = d3.axisBottom(x);
  // xAxis.tickFormat(d3.timeFormat('%b'));
  // g.append('g')
  //   .attr('transform', 'translate(0,' + height + ')')
  //   .attr('color', '#4d4d4d')
  //   .attr('font-family', '\'avenir next\', avenir, sans-serif')
  //   .call(xAxis)
  //   .select('.domain')
  //   .remove();

  //draw y-axis
  let yAxis = d3.axisLeft(y);
  yAxis.ticks(6);
  if (yFormat) {
    yAxis.tickFormat(d3.format('+.0%'));
  }
  g.append('g')
    .call(yAxis)
    .attr('color', '#e6b3c1')
    .attr('font-family', '\'avenir next\', avenir, sans-serif')
    .select('.domain')
    .remove();

  svg.selectAll('.tick line').remove();

  //draw line
  var line = d3.line().x(d => x(d.date)).y(d => y(d.val));
  g.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', '#e6b3c1')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.8)
    .attr('d', line);

  addAnnotations(svg, x, y, notes);

};
