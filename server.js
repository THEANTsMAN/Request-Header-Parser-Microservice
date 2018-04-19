// Request Header Parser Microservice

// Parses the request header for the:
//  - IP address of the request
//  - Language
//  - Software of the OS

// init project
var express = require('express');
var app = express();

app.get("*", function (request, response) {
  let jsonHeader = JSON.parse(JSON.stringify(request.headers));
  console.log(jsonHeader);
  let resJSON = {
    'ipaddress': jsonHeader["x-forwarded-for"].split(',')[0],
    'language': jsonHeader["accept-language"].split(',')[0],
    'software': jsonHeader["user-agent"].split("(").toString().split(")")[0].split(',')[1]
  };
  response.send(resJSON);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Microservice is listening on port ' + listener.address().port);
});
