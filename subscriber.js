var express = require('express');
var app = express();
var http = require('http').Server(app);
var redis = require('redis');
const dotenv = require('dotenv');

dotenv.config();
var client = redis.createClient(`redis://${process.env.REDIS_HOST}:6379`);
var io = require('socket.io')(http);

app.use('/', express.static('www'));

http.listen(8000, function () {
    console.log('listening on *:8000');
});

client.on('message', function (chan, msg) {
    console.log(chan);
    console.log(msg);
    io.sockets.emit(chan, msg);
});

client.subscribe('someChannel');
