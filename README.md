
# osm

Display [OpenStreetMaps](http://www.openstreetmap.org/).

![screenshot](http://i.cloudup.com/SeqJIzBpAb.png)

## Usage

Here's the code for the three examples above:

```js
var osm = require('osm');

// show a map of the current position
var map = osm();
document.body.appendChild(map.show());

// show a map of a fixed position
map = osm().position(47.88038, 10.6222475);
document.body.appendChild(map.show());

// show a map of the current position with a custom radius
map = osm().radius(0.008);
document.body.appendChild(map.show());
```

## API

### osm()

Create a new `osm` instance.

### osm#position(lat, lon)

Set the position to (`lat`, `long`). If you don't call this method `osm` will try to get the current position using the geolocation api.

This method is chainable.

### osm#radius(radius)

Set the map's radius in degrees. If you don't call this method, it defaults to `0.002`.

This method is chainable.

### osm#show()

Return the map's dom element.

## Installation

With [npm](http://npmjs.org) do:

```bash
$ npm install osm
```

Then bundle for the client using [browserify](http://browserify.org/).

## License

Copyright (c) 2013 Julian Gruber &lt;julian@wayla.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
