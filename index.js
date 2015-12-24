var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  var cts = '<div>';
  cts = cts + '<div><a href="binding.html">binding</a></div>';
  cts = cts + '<div><a href="books.html">books</a></div>';
  cts = cts + '<div><a href="include.html">include</a></div>';
  cts = cts + '<div><a href="smpl1.html">smpl1</a></div>';
  cts = cts + '<div><a href="template.html">template</a></div>';
  cts = cts + '<div><a href="event.html">event</a></div>';
  cts = cts + '</div>';
  res.send(cts);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
