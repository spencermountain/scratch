
window.makeGraph = function(svg, data, max, min, annotations) {
  var margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  };
  var width = +svg.attr('width') - margin.left - margin.right;
  var height = +svg.attr('height') - margin.top - margin.bottom;
  var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  data = yearData.map(o => {
    o.date = new Date(o.date);
    return o;
  });

  var x = d3.scaleTime()
    .rangeRound([0, width]);

  var y = d3.scaleLinear()
    .rangeRound([height, 0]);

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
    .call(xAxis);

  g.append('g')
    .call(d3.axisLeft(y))
    .select('.domain')
    .remove()
    .append('text')
    .attr('fill', '#000')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('Price ($)');

  g.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'lightsteelblue')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.5)
    .attr('d', line);


  const notes = [{
    note: {
      title: 'My birthday',
      label: 'March 28th'
    },
    color: '#ef4837',
    x: x(new Date('2017-03-28')),
    y: y(10),
    dx: -5,
    dy: -50,
    subject: {
      radius: 20,
      radiusPadding: 10
    },
    type: d3.annotationCalloutCircle
  }];

  // d3.annotation().annotations(annotations)


  const makeAnnotations = d3.annotation()
    .notePadding(15)
    .type(d3.annotationLabel)
    .accessorsInverse({
      date: d => formatTime(x.invert(d.x)),
      close: d => y.invert(d.y)
    })
    .annotations(notes);

  svg.append('g')
    .attr('class', 'annotation-group')
    .call(makeAnnotations);

};
