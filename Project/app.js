var {
    platform,
    floating_platforms,
    criminal,
    police,
    bullet
} = require('./playerObjects.json')

// var building = floating_platforms[0];
var building = floating_platforms[0];
var buildingTwo = floating_platforms[1]
var middleBuild = floating_platforms[2]
var middleBuildTwo = floating_platforms[3]

// const jump = require('./jump')
const col = require('./collision')
const updater = require('./updateMovementServer.js')

const express = require('express')
const socket = require('socket.io')

//App setup
const app = express();

let portNumber = 9999

/* Creates a server at the designated port number. When the server is created, 
then a function is fired back */

var server = app.listen(portNumber, () => {
    console.log("Listening to requests at port " + portNumber)
});

//Static files
app.use(express.static('client'))

// Socket setup
var io = socket(server);

io.on('connection', async function (socket) {
    console.log(console.log("Made socket connection", socket.id))

    // Updates the players movement
    socket.on('playersMove', function (data) {
        io.sockets.emit('send-criminalSpecs', criminal)
        io.sockets.emit('send-policeSpecs', police)
        updater.update(data.criminal, criminal)
        updater.update(data.police, police)

        col.collisions(criminal, police, platform, building, buildingTwo, middleBuild, middleBuildTwo)

        // This stops the criminal from bouncing, notifies the client that the 
        // player has completed their jump
        if (criminal.updateUpPressed) {
            io.sockets.emit('updateUpPressed', false)
            criminal.inAir = false;
            criminal.floating = true;
            criminal.updateUpPressed = false;
        }

        if (police.updateUpPressed) {
            io.sockets.emit('updateUpPressedPolice', false)
            police.floating = true;
            police.updateUpPressed = false
        }

    });
});