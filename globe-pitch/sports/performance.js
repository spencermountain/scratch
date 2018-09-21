window.performanceGraph = function(svg, data, max, min, notes) {
  var width = +svg.attr('width') - margin.left - margin.right;
  var height = +svg.attr('height') - margin.top - margin.bottom;
  var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  //scale our data
  data = jayPerf();
  var x = d3.scaleTime().rangeRound([0, width]);
  var y = d3.scaleLinear().rangeRound([0, height]);
  x.domain([new Date('2017-01-02'), new Date('2017-12-31')]);
  y.domain([max, min]);

  //draw x-axis
  let xAxis = d3.axisBottom(x);
  xAxis.tickFormat(d3.timeFormat('%b'));
  g.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .attr('color', '#4d4d4d')
    .attr('font-family', '\'avenir next\', avenir, sans-serif')
    .call(xAxis)
    .select('.domain')
    .remove();


  //draw y-axis
  let yAxis = d3.axisLeft(y);
  yAxis.ticks(4);
  yAxis.tickFormat(d => d < 0 ? d : '+' + d);
  g.append('g')
    .call(yAxis)
    .attr('color', '#4d4d4d')
    .attr('font-family', '\'avenir next\', avenir, sans-serif')
    .select('.domain')
    .remove();

  svg.selectAll('.tick line').remove();

  var line = d3.line().x(d => x(d.date)).y(d => y(d.val));
  //draw jays
  g.append('path')
    .datum(jayPerf())
    .attr('fill', 'none')
    .attr('stroke', '#66a8cc')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.8)
    .attr('d', line);
  //draw leafs 1
  g.append('path')
    .datum(leaf1Perf())
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.8)
    .attr('d', line);
  //draw leafs 2
  g.append('path')
    .datum(leaf2Perf())
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.8)
    .attr('d', line);
  //draw raptors 1
  g.append('path')
    .datum(raptor1Perf())
    .attr('fill', 'none')
    .attr('stroke', '#cc668a')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.8)
    .attr('d', line);
  //draw raptors 2
  g.append('path')
    .datum(raptor2Perf())
    .attr('fill', 'none')
    .attr('stroke', '#cc668a')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.8)
    .attr('d', line);

  //draw 0-line
  g.append('path')
    .datum(zero)
    .attr('fill', 'none')
    .attr('stroke', 'lightgrey')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-dasharray', '4')
    .attr('stroke-width', 1)
    .attr('d', line);

  addAnnotations(svg, x, y, notes);


};
