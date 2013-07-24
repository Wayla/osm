var osm = require('..');

/**
 * Test cases.
 */

var map = osm();
document.body.appendChild(box('current position:', map.show()));

map = osm().position(47.88038, 10.6222475);
document.body.appendChild(box('fixed position:', map.show()));

map = osm().radius(0.008);
document.body.appendChild(box('radius', map.show()));

/**
 * Utility.
 */

function describe (str) {
  var el = document.createElement('p');
  el.appendChild(document.createTextNode(str));
  document.body.appendChild(el);
}

function box (descr, el) {
  var b = document.createElement('div');
  b.style.width = '350px';
  b.style.float = 'left';

  var p = document.createElement('p');
  p.appendChild(document.createTextNode(descr));
  b.appendChild(p);

  b.appendChild(el);
  return b;
}

document.body.style.font = '20px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif';
document.body.style.padding = '20px 40px';
