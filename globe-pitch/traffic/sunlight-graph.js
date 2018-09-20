window.sunlightGraph = function(svg, data, max, min, notes) {
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
  let xAxis = d3.axisBottom(x);
  xAxis.tickFormat(d3.timeFormat('%b'));
  g.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .attr('color', '#4d4d4d')
    .attr('font-family', '\'avenir next\', avenir, sans-serif')
    .call(xAxis)
    .select('.domain')
    .remove();


  //draw line
  var area = d3.area()
    .x(d => x(d.date))
    .y0(d => y(d.val))
    .y1(d => 95);

  g.append('path')
    .datum(data)
    .attr('fill', 'rgba(102, 124, 146,0.2)')
    .attr('d', area);

  addAnnotations(svg, x, y, notes);


  //add top weather conditions bars
  let days = weatherData();
  days = addDays(days);
  svg.selectAll('.bar')
    .data(days)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('fill', (d) => d.val)
    .attr('x', function(d) {
      return x(d.date);
    })
    .attr('y', -95)
    .attr('width', 5)
    .attr('height', 22);

};
