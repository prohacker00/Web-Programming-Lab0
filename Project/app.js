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


let GAME_WIDTH = 1150;
let GAME_HEIGHT = 450;

const heightAdjust = 50

var checker = true;

var background = {
    x: 0,
    y: 0,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    color: 'white'
}

var platform = {
    x: 0,
    y: GAME_HEIGHT - heightAdjust,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    color: "lightgreen",

}

var building = {
    x: (GAME_WIDTH / 2) - 300/2,
    y: 330,
    width : 300,
    height : 60,
    color : "red",
}

var buildingTwo = {
    x: (GAME_WIDTH / 2) + 150,
    y: 220,
    width : 300,
    height : 60,
    color : "red",
}


var criminal = {
    width: 50,
    height: 50,
    x: 300,
    y: platform.y - heightAdjust,
    color: 'red',
    xSpeed: 4.5,
    ySpeed: 0.25, //Decreasing this makes the criminal more floaty
    originalGravity: 8,
    gravity: 8, // How far it can jump
    inAir: false,
    falling: 0,
    updateUpPressed : false,
}

var express = require('express')
var socket = require('socket.io')

//App setup
var app = express();

var portNumber = 9999

// Creates a server at the designated port number. When the server
// is created, then a function is fired back

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
        
        if (data.rightPressed) {
            criminal.x += criminal.xSpeed;
            console.log(criminal.x)

        } if (data.leftPressed) {
            criminal.x -= criminal.xSpeed;
            console.log(criminal.x)

        }
        if (data.upPressed) {
            jump(criminal)
            console.log(data.upPressed)
        }
        io.sockets.emit('send-criminalSpecs', criminal)
        collisions()
    });

});

// setInterval(function () {
//     io.sockets.emit('send-criminalSpecs', criminal)
//     // console.log(criminal.upPressed)
//     collisions()
// }, 1000 / 60);


function jump(object1) {
    object1.inAir = false
    object1.y -= object1.gravity;
    object1.gravity -= object1.ySpeed

}

function collisions() {
    // if (collide(criminal, police)) {

    //     alert("You have been caught by the police! Refresh to play again!")
    //     return true

    // }

    // if (collide(criminal, bullet)) {

    //     bullet.y = 4000
    //     health--;
    //     if (health <= 0) {
    //         alert("You have been killed by the police! Refresh to play again!")
    //         return true
    //     }

    // }

    // Criminal 

    if (touches(criminal, platform)) {
        console.log("soeaszs")
        land(criminal, platform)

    }
    if (touches(criminal, building)) {
        land(criminal, building)


    }
    if (touches(criminal, buildingTwo)) {
        land(criminal, buildingTwo)
    }

    if (!collide(criminal, building) && !collide(criminal, buildingTwo) && !collide(criminal, platform)) {
        criminal.inAir = true
    }

    // Police

    // if (touches(police, platform)) {
    //     land(police, platform)

    // }
    // if (touches(police, building)) {
    //     land(police, building)


    // }
    // if (touches(police, buildingTwo)) {
    //     land(police, buildingTwo)
    // }

    // if (!collide(police, building) && !collide(police, buildingTwo) && !collide(police, platform)) {
    //     police.inAir = true
    // }

}

function collide(object1, object2) {
    return object2.x <= (object1.x + object1.width) && (object2.x + object2.width) >=
        object1.x && (object2.y <= (object1.y + object1.height) && ((object2.y + object2.height) >= object1.y))
}


function land(object1, object2) {
    console.log("Landed!")
    object1.y = object2.y - object1.width
    object1.gravity = object1.originalGravity;
    object1.upPressed = false;
    object1.inAir = false;
    object1.falling = 0;
    io.sockets.emit('updateUpPressed', object1.upPressed)

}

function touches(object1, object2) {
    return ((Math.ceil(object1.y) + object1.height <= object2.y + 10) &&
            (object1.x >= object2.x || object1.x <= object2.x)) && collide(object1, object2) &&
        ((object1.gravity < 0) || object1.inAir)
}