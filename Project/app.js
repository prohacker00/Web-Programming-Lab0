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

var newUser = " "
var newPassword = " "
var newScore = 0

var players = {}
var lobbyArray = []
var playerArray = []
var currentPolice;
var currentCriminal;
var numberOfPlayers = 0

var playerMap = new Map();

// Importing functions. Col is for collision detection
const col = require('./collision')
const updater = require('./updateMovementServer.js')
const mongojs = require('mongojs')
const express = require('express')
const socket = require('socket.io');

const db = mongojs('localhost:27017/shadowRiseDB', ['player'])

//App setup
const app = express();

// The port number in which our game will run
let portNumber = 9999

/* Creates a server at the designated port number. When the server is created, 
then a function is fired back */

var server = app.listen(portNumber, () => {
    console.log("Listening to requests at port", portNumber)
});


//Static files
app.use(express.static('client'))

// Socket setup
var io = socket(server);

io.on('connection', function (socket) {
    console.log("Made socket connection", socket.id)
    numberOfPlayers++;

    if (numberOfPlayers == 1) {

        playerArray.push(socket.id)
        currentCriminal = playerArray[0]
        players[currentCriminal] = criminal

    } else if (numberOfPlayers == 2) {

        playerArray.push(socket.id)
        currentPolice = playerArray[1]
        players[currentPolice] = police

    } else if (numberOfPlayers > 2) {

        lobbyArray.push(socket.id)
    }

    /* login system */

    var correctDetails = function (data, cb) {
        db.player.find({
            username: data.username,
            password: data.password
        }, function (err, res) {
            if (res.length > 0)
                cb(true);
            else
                cb(false);
        });
    }


    socket.on('signup', function (data) {
        db.player.insert({
            username: data.username,
            password: data.password,
            score: 0
        });
        
    })

    socket.on('login', function (data) {  
        correctDetails(data, function (res) {
            if (res) {
                playerMap.set(socket.id, data.username)
                socket.emit('loginDetails', {
                    success: true
                });
                console.log("yay")
            } else {
                socket.emit('loginDetails', {
                    success: false
                });
                console.log("wrong")
            }
        });
    });

    socket.on('loggedIn', function () {
        if (numberOfPlayers == 1) {

            currentCriminal = playerArray[2]
            players[currentCriminal] = criminal;

        } else if (numberOfPlayers == 2) {

            currentPolice = playerArray[1];
            players[currentPolice] = police;
        }
    });

    /* data (the parameter inside function) contains the booleans used to check 
       whether a key has been pressed for both players */

    socket.on('playersMove', function (data) {

        var player = players[socket.id] || {};

        // Checks if any keys have been pressed, and moves the players accordingly.

        updater.update(data, player, bullet)

        // If the cooldown period finishes, then player can shoot again!

        if (bullet.bulletTime) {
            console.log("A bullet is ready! Shoot!")
            io.sockets.emit('updateDownPressed', false)
            bullet.bulletTime = false;
        }

        // Used to check if any collisions happen between everything

        col.collisions(criminal, police, platform, building, buildingTwo, middleBuild, middleBuildTwo, edgeOne, edgeTwo, bullet, crimbullet)

        /* This stops the players from bouncing, notifies the client that the player has completed their jump */

        if (player.updateUpPressed) {
            io.sockets.emit('updateUpPressed', false)
            player.inAir = false;
            player.floating = true;
            player.updateUpPressed = false;
        }

        // Emits the police and the criminal to the client. So they can be drawn onto the canvas.
    });

    // This is our game over function
    socket.on('newGame', async function (data) {

        if (lobbyArray.length > 0) {

            if (data == "police") {
                var winnerSocket = currentPolice;
                var userNameWinner = playerMap.get(winnerSocket)
                db.player.update(
                    {
                    username: userNameWinner},
                    {
                        $inc: {score: 1}
                    },
                    )
                lobbyArray.push(playerArray.shift());
                players[currentCriminal] = "";
                currentCriminal = "";

                currentCriminal = lobbyArray.shift();
                playerArray[0] = currentCriminal
                players[currentCriminal] = criminal;

            } else if (data == "criminal") {

                lobbyArray.push(playerArray.pop())
                players[currentPolice] = ""
                currentPolice = "";

                currentPolice = lobbyArray.shift()
                playerArray[1] = currentPolice
                players[currentPolice] = police
            }
        }

        setTimeout(() => {
            police.health = 5;
            criminal.health = 5;

            police.x = 120;
            criminal.x = 1005;

            police.y = 350;
            criminal.y = 350;

        }, 1000);
    })

    socket.on('disconnect', () => {
        for (let i = 0; i < playerArray.length; i++) {
            if (socket.id === playerArray[i]) {
                if (currentCriminal === playerArray[i]) {
                    playerArray[currentCriminal] = ""
                    currentCriminal = ""
                    currentCriminal = lobbyArray.shift();
                    playerArray[i] = currentCriminal
                    players[currentCriminal] = criminal;
                }
                else if (currentPolice === playerArray[i]) {
                    playerArray[currentPolice] = ""
                    currentPolice = ""
                    currentPolice = lobbyArray.shift();
                    playerArray[i] = currentPolice;
                    players[currentPolice] = police;
                }

            }
        }
    })
});


setInterval(() => {
    io.sockets.emit('send-criminalSpecs', players)
    io.sockets.emit('send-bulletSpecs', bullet)
    io.sockets.emit('send-crimbulletSpecs', crimbullet)
}, 1000 / 60);