// Express import
const express = require('express');
const app = express();
const serv = require ('http').Server(app);
var clients = 0;

app.use(express.static(__dirname));
app.use(express.static('client'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/htmlpublic/index.html');
});

var portNumber = (2000);
serv.listen(2000);
console.log('server connection')

// socket.io import
var io = require('socket.io') (serv, {});

io.sockets.on('connection', function(socket) {
    console.log('socket connection');
    clients++;
})

io.sockets.on('disconnect', function(socket) {
    console.log('socket disconnection');
    clients--;
}) 