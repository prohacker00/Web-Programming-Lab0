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

    criminalX += 1.0
    PoliceX += 1.9

    if ((PoliceX + 25) > (criminalX - 25)) {
        
        gameOver();
        
    }
}

function gameOver() {
    alert("You have been caught by the police! Refresh to play again!")
    clearInterval(gameStart)
}

var gameStart = setInterval(render,10)