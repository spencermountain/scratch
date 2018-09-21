
//
window.addAnnotations = function(svg, x, y, notes) {
  notes = notes.map((o) => {
    o.x = x(new Date(o.x));
    o.y = y(o.y);
    return o;
  });
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

var margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

const addDays = function(data) {
  let d = spacetime([2017, 1, 1]);
  d.startOf('year');
  d.minus(1, 'day');
  return data.map((val) => {
    d.add(1, 'day');
    return {
      date: d.d,
      val: val
    };
  });
};

const zero = [{
  date: new Date('2017-01-01:08:00'),
  val: 0
}, {
  date: new Date('2017-12-30:08:00'),
  val: 0
}];
