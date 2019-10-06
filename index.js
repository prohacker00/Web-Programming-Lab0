var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

GAME_WIDTH = canvas.getAttribute('width')
GAME_HEIGHT = canvas.getAttribute('height')

drawRect(300,200,50,50, "red")

drawRect(15,200,50,50,"blue")

let criminalX = 300;
let PoliceX = 15

function drawRect(x,y,width,height,color) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,width,height)
}

function render() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'white')

    drawRect(criminalX,200,50,50, "red")

    drawRect(PoliceX,200,50,50,"blue")

    if(rightPressed) {
        criminalX += 10
        drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'white')
        drawRect(criminalX, 200, 50, 50, "red")
        rightPressed = false;
    }

    if ((PoliceX + 25) > (criminalX - 25)) {
        
        gameOver();
        
    }
}

function gameOver() {
    alert("You have been caught by the police! Refresh to play again!")
    clearInterval(gameStart)
}

function movement(){
    PoliceX += 2.0
}

var gameStart = setInterval(render,10)

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

function keyDownHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = true;
        movement();
    }
    else if(event.keyCode == 37) {
        leftPressed = true;
    }
    if(event.keyCode == 40) {
    	downPressed = true;
    }
    else if(event.keyCode == 38) {
    	upPressed = true;
    }
}

