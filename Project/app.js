var {
    platform,
    floating_platforms,
    criminal,
    police,
    bullet
} = require('./playerObjects.json')

var building = floating_platforms[0]
var buildingTwo = floating_platforms[1]

console.log(police)

const jump = require('./jump')
const col = require('./collision')

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

io.on('connection', function (socket) {
    console.log(console.log("Made socket connection", socket.id))

    socket.on('criminalMove', function (data) {
        io.sockets.emit('send-criminalSpecs', criminal)
        
        if (data.rightPressed) {
            criminal.x += criminal.xSpeed;
            // console.log(criminal.x)

        }
        if (data.leftPressed) {
            criminal.x -= criminal.xSpeed;
            // console.log(criminal.x)

        }
        if (data.upPressed) {
            criminal.floating = false
            jump.jump(criminal);
            
        }

        if (data.spacePressed) {
        
        }
        
        col.collisions(criminal, police, platform, building, buildingTwo)
        if (criminal.updateUpPressed) {
            io.sockets.emit('updateUpPressed', false)
            criminal.floating = true;
            criminal.updateUpPressed = false
        }
        
    });


    socket.on('policeMove', function(data) {
        io.sockets.emit('send-policeSpecs', police)

        if (data.rightPressed) {
            police.x += police.xSpeed;

        }
        if (data.leftPressed) {
            police.x -= police.xSpeed;

        }
        if (data.upPressed) {
            police.floating = false
            jump.jump(police);
            
        }
        
        col.collisions(criminal,police, platform, building, buildingTwo)
        if (police.updateUpPressed) {
            io.sockets.emit('updateUpPressedPolice', false)
            police.floating = true;
            police.updateUpPressed = false
        }

    });
});