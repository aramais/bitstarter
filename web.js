

var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {response.send('pizda rulyu');});

var buffer = new Buffer(18);
fs.readFileSync('index.html',buffer, function (err, data) { if (err) throw err; console.log(data)});
buffer.toString('utf-8');

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var k = 20;
