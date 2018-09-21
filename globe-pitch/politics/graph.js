window.billsGraph = function(svg, data, max, min, notes) {
  data = councilData();
  var width = +svg.attr('width') - margin.left - margin.right;
  var height = +svg.attr('height') - margin.top - margin.bottom;
  var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  //scale our data
  // data = addDays(data);
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
  yAxis.tickFormat(d3.format('~s'));
  g.append('g')
    .call(yAxis)
    .attr('color', '#b3c5e6')
    .attr('font-family', '\'avenir next\', avenir, sans-serif')
    .select('.domain')
    .remove();

  svg.selectAll('.tick line').remove();

  svg.selectAll('.council')
    .data(data)
    .enter().append('rect')
    .attr('class', 'council')
    .attr('opacity', 0.8)
    .attr('fill', 'cornflowerblue')
    .attr('x', d => x(d.date))
    .attr('y', d => y(d.val) + 3)
    .attr('width', 3)
    .attr('height', d => 200 - y(d.val));

  svg.selectAll('.queens')
    .data(queensData())
    .enter().append('rect')
    .attr('class', 'queens')
    .attr('opacity', 0.8)
    .attr('fill', 'steelblue')
    .attr('x', d => x(d.date))
    .attr('y', d => y(d.val) + 3)
    .attr('width', 3)
    .attr('height', d => 200 - y(d.val));

  addAnnotations(svg, x, y, notes);
};
