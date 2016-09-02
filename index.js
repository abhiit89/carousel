/**
 * Created by abhinav on 17/2/16.
 */
var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express'),
    process = require('process');

var app = express();

app.use(express.static('./'));

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

var server = http.createServer(app).listen(server_port, server_host, function(){
    console.log("SSL Express server listening on port " + server_port);
});