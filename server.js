// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("*", function (request, response) {
  let jsonHeader = JSON.parse(JSON.stringify(request.headers));
  let returnedObj = {
    'ipaddress': jsonHeader["x-forwarded-for"].split(',')[0],
    'language': jsonHeader["accept-language"].split(',')[0],
    'software': jsonHeader["user-agent"].split("(").toString().split(")")[0].split(',')[1]
  };
  response.send(returnedObj);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

