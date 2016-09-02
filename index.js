/**
 * Created by abhinav on 17/2/16.
 */
var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express');

var app = express();

app.use(express.static('./'));


var server = http.createServer(app).listen(3000, function(){
    console.log("SSL Express server listening on port " + 3000);
});