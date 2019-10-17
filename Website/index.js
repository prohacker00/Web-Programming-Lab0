// Declaring constants

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const drawRectangle = new drawRect();

const GAME_WIDTH = canvas.getAttribute('width');
const GAME_HEIGHT = canvas.getAttribute('height');

var rightPressed;
var leftPressed;
var upPressed;
var downPressed;

var policeRightPressed;

var gravity = 2.0;

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
    color: 'red'

}

var police = {
    x: 15,
    y: platform.y - 100,
    width: 100,
    height: 100,
    color: 'blue'
}


// Starts the game, actively checks for input every 10 milliseconds

var gameStart = setInterval(drawPlayers, 16.67);
console.log(criminal.y)


// Detects when the key is released

function keyUpHandler(event) {


    if (event.keyCode == 39) {
        rightPressed = false;

    } else if (event.keyCode == 37) {
        leftPressed = false;

    }
    

    if (event.keyCode == 68) {
        policeRightPressed = false;

    }
}

// Detects when the key is pressed

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



}

// Main function. Draws the player objects

function drawPlayers() {

    if (rightPressed) {
        criminal.x += 2.89;
    } else if (leftPressed) {
        criminal.x -= 1.89;
    }

    if (policeRightPressed) {
        police.x += 3.09;
    }

    if (upPressed) { 
        criminal.y -= gravity;
        gravity -= 0.05
        console.log(criminal.y + ' ' + gravity)

        if(criminal.y === 550) {
            console.log("trued")
            upPressed = false;
            gravity = 3.0
            return;
        }

    }

    drawRectangle.drawRect(ctx, 0, 0, GAME_WIDTH, GAME_HEIGHT, 'white')
    drawRectangle.drawRect(ctx, platform.x, platform.y, platform.width, platform.height, platform.color)
    drawRectangle.drawRect(ctx, criminal.x, criminal.y, criminal.width, criminal.height, criminal.color)
    drawRectangle.drawRect(ctx, police.x, police.y, police.width, police.height, police.color)

    if ((police.x + (police.width / 2)) > (criminal.x - (criminal.width / 2))) {

        alert("You have been caught by the police! Refresh to play again!")
        clearInterval(gameStart)
    }
}

function jump(yPosition) {
    var gravity = 0;
    yPosition -= 1;
    gravity++;
    if (gravity === 10) {
        fall(yPosition,gravity)
        gravity = 0;
    }
}

function fall(yPosition,gravity) {
    yPosition += 1.00;
    gravity--;
    if(gravity === 0)
    return;
        

}