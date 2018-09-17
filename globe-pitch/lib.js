
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
  top: 20,
  right: 0,
  bottom: 30,
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
