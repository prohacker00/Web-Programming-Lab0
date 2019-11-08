// This file has the engine to start the game, which runs at 60 frames per second

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const FPS = 60;

const renderSpeed = 1000/FPS;

const dr = new drawRect();

const cd = new cooldown();

const collisionDetecter = new collision();

const myObjectSpeed = new updateMovement();

var score = 0;

var gameStart = setInterval(drawPlayers, renderSpeed);

function drawPlayers() {

    if (collisionDetecter.collisions()) {
        clearInterval(gameStart)
    } 

    if (!criminal.leftPressed && !criminal.rightPressed) {
        criminalImageStatus = criminal.imageS;
    }

    score++;

    document.getElementById("score").innerHTML = Math.floor(score);

    document.getElementById("bullets").innerHTML = bulletAvailable;

    document.getElementById("health").innerHTML = health

    myObjectSpeed.update();

    dr.rectangle(ctx, background)
    dr.rectangle(ctx, platform)
<<<<<<< HEAD
    dr.rectangle(ctx, criminal)
=======
    dr.rectangle(ctx, building)
    dr.rectangle(ctx, buildingTwo)
>>>>>>> 70500f3b9fc9b3b925b7366646e30928fe051c5a
    dr.rectangle(ctx, bullet)

    dr.image(ctx, criminalImageStatus, criminal)
    dr.image(ctx, police.image, police)

    
    cd.bulletCooldown()

}