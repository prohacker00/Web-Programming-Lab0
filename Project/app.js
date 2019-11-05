// Express import
const express = require('express');
const app = express();
const serv = require ('http').Server(app);
var clients = 0;

app.use(express.static(__dirname));
app.use(express.static('client'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

var portNumber = (2000);
serv.listen(2000);
console.log('server connection')

// socket.io import
var io = require('socket.io') (serv, {});
var SOCKET_LIST_POLICE = {};
var SOCKET_LIST_CRIMINALS = {};

io.sockets.on('connection', function(socket) {
    console.log('socket connection');
    
    socket.id = Math.random();
    socket.x = 0;
    socket.y = 0;
    socket.number = " " + Math.floor(10 * Math.random());

    if (SOCKET_LIST_POLICE == [] || SOCKET_LIST_POLICE.length < SOCKET_LIST_CRIMINALS.length) {
        SOCKET_LIST_POLICE[socket.id] = socket;    
    }

    else {
        SOCKET_LIST_CRIMINALS[socket.id] = socket; 
    }
})

io.sockets.on('disconnect', function(socket) {
    console.log('socket disconnection');
    delete SOCKET_LIST_CRIMINALS[socket.id];
    delete SOCKET_LIST_POLICE[socket.id];
})

setInterval(function() {

    var packPol = []
    for(var i in SOCKET_LIST_POLICE) {
        var socket = SOCKET_LIST_POLICE[i];
        
        packPol.push({
            number: socket.number
            });
    }

    for(var i in SOCKET_LIST_POLICE) {
        socket.emit('newPositionsPol', packPol)
    }




    var packCrim = []
    for(var i in SOCKET_LIST_CRIMINALS) {
        var socket = SOCKET_LIST_CRIMINALS[i];
        
        packCrim.push({
            
            });
    }

}, 1000/60) ;