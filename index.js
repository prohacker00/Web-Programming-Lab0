var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const drawRectangle = new drawRect();

const GAME_WIDTH = canvas.getAttribute('width')
const GAME_HEIGHT = canvas.getAttribute('height')

document.addEventListener('keydown', keyDownHandler, false);
// canvas.addEventListener('keyup', keyUpHandler, false);

//Starting x-coordinates of the policemen and the criminals
let criminalX = 300;
let criminalY = 200;
let policeX = 15;
let policeY = 200;
// End of constants 

// Game Start



// Event listeners


// Methods should go here:

function keyDownHandler(event) {
    if(event.keyCode == 39) {
        // rightPressed = true;
        criminalX += 5;
        
    }
    else if(event.keyCode == 37) {
        // leftPressed = true;
        criminalX -= 5;
    }
    if(event.keyCode == 40) {
        // downPressed = true;
        criminalY +=5
    }
    else if(event.keyCode == 38) {
        // upPressed = true;
        criminalY -= 5;
    }
    drawPlayers()
}

function drawPlayers() {
drawRectangle.drawRect(ctx,0,0,GAME_WIDTH,GAME_HEIGHT,'white')
drawRectangle.drawRect(ctx,criminalX,criminalY,50,50,"red")
drawRectangle.drawRect(ctx,policeX,policeY,50,50,"blue")

}

function redirect() {
    window.location.href = "http://www.w3schools.com";
}


