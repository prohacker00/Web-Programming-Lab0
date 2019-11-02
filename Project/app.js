// Express import
const express = require('express');
const app = express();
const serv = require ('http').Server(app);
app.use(express.static(__dirname));

app.use(express.static('client'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

serv.listen(2000);
console.log('server connection')

// socket.io import
var io = require('socket.io') (serv, {});
io.sockets.on('connection', function(socket) {
    console.log('socket connection');
}) 