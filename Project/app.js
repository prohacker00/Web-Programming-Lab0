/*
const express = require('express');
const app = express();

const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const server = http.Server(app);
const io = socketIO(server);

const PORT_NUMBER = 1000

app.set('port', PORT_NUMBER);

app.use(express.static(__dirname));
app.use(express.static('client'));
*/

// Ignore the above code, for now. Refer to the code below.










var express = require('express')
var socket = require('socket.io')

//App setup
var app = express();

var portNumber = 9999

// Creates a server at the designated port number. When the server
// is created, then a functionis fired back

var server = app.listen(portNumber, () => {
    console.log("Listening to requests at port " + portNumber)
});

//Static files
app.use(express.static('client'))

// Socket setup
var io = socket(server);

io.on('connection', function(socket) {
    console.log(console.log("Made socket connection", socket.id))

    socket.on('criminal', function(data) {
        console.log(data)
        io.sockets.emit('criminal', data)
    })

})