const el = redom.el;

const isObject = (a) => Object.prototype.toString.call(a) === '[object Object]';
const isArray = (a) => Object.prototype.toString.call(a) === '[object Array]';
const isString = (a) => typeof a === 'string';

window.div = (a, b, c) => {
  let attr = {};
  let inside = [];
  //class, attr, children
  if (a && b && isString(a) && isObject(b)) {
    attr = b;
    attr.class = a;
    inside = c;
  } else if (a && b && isString(a)) {
    attr = {
      class: a
    };
    inside = b;
  } else {
    attr = a;
    inside = b;
  }
  return el('div', attr, inside);
};

window.div = div;
