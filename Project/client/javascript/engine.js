// This file has the engine to start the game, which runs at 60 frames per second

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const dr = new drawRect();

const collisionDetecter = new collision();

const myObjectSpeed = new objectSpeed();

var gameStart = setInterval(drawPlayers, renderSpeed);

function drawPlayers() {

    if (collisionDetecter.collisions()) {
        clearInterval(gameStart)
    }

    myObjectSpeed.updateMovement();

    dr.rectangle(ctx, background)
    dr.rectangle(ctx, platform)
    dr.rectangle(ctx, criminal)
    dr.rectangle(ctx, police)
    dr.rectangle(ctx, bullet)

}