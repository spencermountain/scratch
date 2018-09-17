
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
