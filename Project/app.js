var {
    platform,
    floating_platforms,
    criminal,
    police,
    bullet,
    crimbullet
} = require('./playerObjects.json')

var building = floating_platforms[0];
var buildingTwo = floating_platforms[1];
var middleBuild = floating_platforms[2];
var middleBuildTwo = floating_platforms[3];
var edgeOne = floating_platforms[4];
var edgeTwo = floating_platforms[5];

var players = {}
var numberOfPlayers = 0

// Importing functions. Col is for collision detection
const col = require('./collision')
const updater = require('./updateMovementServer.js')

const express = require('express')
const socket = require('socket.io')

//App setup
const app = express();

// The port number in which our game will run
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


// Once a connection has been made, does something

io.on('connection', function (socket) {
    console.log(console.log("Made socket connection", socket.id))
    numberOfPlayers++;

    if (numberOfPlayers === 1) {
        io.sockets.emit('send-criminalPlayer' , 1)
    } else if(numberOfPlayers == 2) {
        io.sockets.emit('send-policePlayer' , 2)
    }


    /* data (the parameter inside function) contains the booleans used to check 
       whether a key has been pressed for both players */

    socket.on('playersMove', function (data) {
        io.sockets.emit('send-criminalSpecs', criminal)
        io.sockets.emit('send-policeSpecs', police)
        io.sockets.emit('send-bulletSpecs', bullet)
        io.sockets.emit('send-crimbulletSpecs', crimbullet)


        // Checks if any keys have been pressed, and moves the players accordingly.

        updater.update(data.criminal, criminal, bullet)
        updater.update(data.police, police, crimbullet)

        // If the cooldown period finishes, then player can shoot again!

        if (bullet.bulletTime) {
            console.log("A bullet is ready! Shoot, o evil criminal!")
            io.sockets.emit('updateDownPressed', false)
            bullet.bulletTime = false;
        }

        if (crimbullet.bulletTime) {
            console.log("A bullet is ready! Shoot, young hero!")
            io.sockets.emit('updateSpacePressed', false)
            crimbullet.bulletTime = false;
        }

        // Used to check if any collisions happen between everything

        col.collisions(criminal, police, platform, building, buildingTwo, middleBuild, middleBuildTwo, edgeOne, edgeTwo, bullet, crimbullet)

        /* This stops the players from bouncing, notifies the client that the player has completed their jump */

        if (criminal.updateUpPressed) {
            io.sockets.emit('updateUpPressed', false)
            criminal.inAir = false;
            criminal.floating = true;
            criminal.updateUpPressed = false;
        }

        if (police.updateUpPressed) {
            io.sockets.emit('updateUpPressedPolice', false)
            police.inAir = false;
            police.floating = true;
            police.updateUpPressed = false
        }

        // Emits the police and the criminal to the client. So they can be drawn onto the canvas.



    });
});