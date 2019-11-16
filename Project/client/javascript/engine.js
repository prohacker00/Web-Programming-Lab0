// This file has the engine to start the game, which runs at 60 frames per second

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var socket = io.connect('http://localhost:9999')

const FPS = 60;

const renderSpeed = 1000 / FPS;

const dr = new drawRect();

const cd = new cooldown();

const collisionDetecter = new collision();

const myObjectSpeed = new updateMovement();

var score = 0;

var gameStart = setInterval(drawPlayers, renderSpeed);

function drawPlayers() {

    socket.on('send-policeSpecs' , function(data) {
        police = data
    })

    socket.on('send-criminalSpecs' , function(data) {
        criminal = data
    })

    // if (collisionDetecter.collisions()) {
    //     clearInterval(gameStart)
    // }

    if (!criminalMove.leftPressed && !criminalMove.rightPressed) {
        criminalImageStatus = criminalSprites.imageS;
    }

    if (!policeMove.leftPressed && !policeMove.rightPressed) {
        policeImageStatus = policeSprites.imageS;
    }

    score++;

    document.getElementById("score").innerHTML = Math.floor(score);

    document.getElementById("bullets").innerHTML = bulletAvailable;

    document.getElementById("health").innerHTML = health

    // myObjectSpeed.update();

    dr.rectangle(ctx, background)
    dr.rectangle(ctx, platform)

    dr.rectangle(ctx, building)
    dr.rectangle(ctx, buildingTwo)
    dr.rectangle(ctx, bullet)
    // dr.rectangle(ctx, criminal)

    dr.image(ctx, criminalImageStatus, criminal)
    dr.image(ctx, policeImageStatus, police)

    socket.emit('criminalMove' , criminalMove);
    socket.emit('policeMove', policeMove)

    socket.on('updateUpPressed', function(data) {
        criminalMove.upPressed = data;
    })

    socket.on('updateUpPressedPolice', function(data) {
        policeMove.upPressed = data
    })

    cd.bulletCooldown()

}