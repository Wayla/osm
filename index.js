var getPosition = require('geo-position');
var base = 'http://www.openstreetmap.org/export/embed.html';
var Emitter = require('events').EventEmitter;
var inherits = require('util').inherits;

module.exports = Map;

function Map () {
  if (!(this instanceof Map)) return new Map();
  Emitter.call(this);
  this.iframe = document.createElement('iframe');

  this._position = null;
  this._radius = 0.004;
}

inherits(Map, Emitter);

Map.prototype.radius = function (radius) {
  this._radius = radius;
  return this;
};

Map.prototype.position = function (latitude, longitude) {
  this._position = {
    latitude: latitude,
    longitude: longitude
  };
  this.emit('position', this._position);
  return this;
};

Map.prototype.show = function () {
  var self = this;
  var iframe = self.iframe;
  var r = self._radius;

  if (self._position) onPosition(null, self._position);
  else getPosition(function (err, obj) {
    onPosition(err, obj.coords);
  });
  
  function onPosition (err, position) {
    if (err) return console.error(err);
    self.emit('position', position);

    var lon = position.longitude;
    var lat = position.latitude;
    iframe.src = base
      + '?layer=mapnik'
      + '&bbox=' + [lon - r/2, lat - r/4, lon + r/2, lat + r/4].join(',')
      + '&marker=' + [lat, lon].join(',')
  }

  return iframe;
};
