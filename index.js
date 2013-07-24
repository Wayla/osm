var getPosition = require('geo-position');
var base = 'http://www.openstreetmap.org/export/embed.html';

module.exports = Map;

function Map () {
  if (!(this instanceof Map)) return new Map();
  this.iframe = document.createElement('iframe');

  this._position = null;
  this._radius = 0.004;
}

Map.prototype.radius = function (radius) {
  this._radius = radius;
  return this;
};

Map.prototype.position = function (latitude, longitude) {
  this._position = {
    latitude: latitude,
    longitude: longitude
  };
  return this;
};

Map.prototype.show = function () {
  var iframe = this.iframe;
  var r = this._radius;

  if (this._position) onPosition(null, this._position);
  else getPosition(function (err, obj) {
    onPosition(err, obj.coords);
  });
  
  function onPosition (err, position) {
    if (err) return console.error(err);

    var lon = position.longitude;
    var lat = position.latitude;
    iframe.src = base
      + '?layer=mapnik'
      + '&bbox=' + [lon - r/2, lat - r/4, lon + r/2, lat + r/4].join(',')
      + '&marker=' + [lat, lon].join(',')
  }

  return iframe;
};
