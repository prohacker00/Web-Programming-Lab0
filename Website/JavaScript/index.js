// Declaring constants

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const drawRectangle = new drawRect();

const GAME_WIDTH = canvas.getAttribute('width');
const GAME_HEIGHT = canvas.getAttribute('height');


// Booleans that change the criminal's movement
var rightPressed;
var leftPressed;
var upPressed;
var downPressed;

// Booleans that change the police's movement
var policeRightPressed;
var policeLeftPressed;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

//Properties of the police, criminal and the platform

var platform = {
    x: 0,
    y: GAME_HEIGHT - 150,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    color: "lightgreen",

}

var criminal = {
    x: 300,
    y: platform.y - 100,
    width: 100,
    height: 100,
    color: 'red',
    gravity: 4.0,

}

var police = {
    x: 15,
    y: platform.y - 100,
    width: 100,
    height: 100,
    color: 'blue'
}


/* Starts the game, actively checks for input every 16.67 milliseconds. Therefore
 game runs at 60 frames per second */

var gameStart = setInterval(drawPlayers, 16.67);
console.log(criminal.y)


// Detects when a key is released

function keyUpHandler(event) {

    if (event.keyCode == 39) {
        rightPressed = false;

    } 
    
    else if (event.keyCode == 37) {
        leftPressed = false;

    }

    if (event.keyCode == 68) {
        policeRightPressed = false;

    }

    if (event.keyCode == 65) {
        policeLeftPressed = false;
    }
}

// Detects when a key is pressed

function keyDownHandler(event) {
    if (event.keyCode == 39) {
        rightPressed = true;

    } else if (event.keyCode == 37) {
        leftPressed = true;

    }

    if (event.keyCode == 38) {
        upPressed = true;
    }

    if (event.keyCode == 68) {
        policeRightPressed = true;

    }
    if (event.keyCode == 65) {
        policeLeftPressed = true;
    }



}

// Main function. Draws the player objects. Updates 60 times per second
// 5 and 3.09 are placeholders for the criminals and polices speed respectively

function drawPlayers() {

    if (rightPressed) {
        criminal.x += 5;
    } else if (leftPressed) {
        criminal.x -= 5;
    }

    if (policeRightPressed) {
        police.x += 3.09;
    }

    if (policeLeftPressed) {
        police.x -= 3.09;
    }


//Players speed decreases as they jump, hence enabling a gravity like effect
    if (upPressed) {
        criminal.y -= criminal.gravity;
        criminal.gravity -= 0.05
        console.log(Math.ceil(criminal.y) + ' ' + criminal.gravity)

        if (Math.ceil(criminal.y) >= 550) {
            upPressed = false;
            criminal.gravity = 4.0
            return;
        }

    }

    drawRectangle.drawRect(ctx, 0, 0, GAME_WIDTH, GAME_HEIGHT, 'white')
    drawRectangle.drawRect(ctx, platform.x, platform.y, platform.width, platform.height, platform.color)
    drawRectangle.drawRect(ctx, criminal.x, criminal.y, criminal.width, criminal.height, criminal.color)
    drawRectangle.drawRect(ctx, police.x, police.y, police.width, police.height, police.color)

    //collision detection
    if (police.x < (criminal.x + criminal.width) && (police.x + police.width) > criminal.x && (police.y < (criminal.y + criminal.height) && ((police.y + police.height) > criminal.y))) {

        alert("You have been caught by the police! Refresh to play again!")
        clearInterval(gameStart)
    }
}