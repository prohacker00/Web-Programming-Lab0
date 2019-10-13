var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const drawRectangle = new drawRect();

const GAME_WIDTH = canvas.getAttribute('width')
const GAME_HEIGHT = canvas.getAttribute('height')

var keypressed;

var platform = {
    x : 0,
    y: GAME_HEIGHT - 150,
    width : GAME_WIDTH,
    height: GAME_HEIGHT,
    color: "black",
    
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

//Starting x-coordinates of the policemen and the criminals

var criminal = {
    x: 300,
    y: platform.y - 100,
    width : 100,
    height : 100,
    color : 'red'
    
}

var police = {
    x : 15,
    y: platform.y - 100,
    width : 100,
    height : 100,
    color : 'blue'
}
// End of constants 

// Game Start

drawPlayers();


// Method

function keyUpHandler(event) {
    keypressed = false;
    if(event.keyCode == 39) {
        alert("released!")
    }
}

function keyDownHandler(event) {
    keypressed = true;

    if(event.keyCode == 39) {
        updateMovement();
      
    }
    
}

function drawPlayers() {


drawRectangle.drawRect(ctx,0,0,GAME_WIDTH,GAME_HEIGHT,'white')
drawRectangle.drawRect(ctx, platform.x ,platform.y , platform.width , platform.height, platform.color)
drawRectangle.drawRect(ctx,criminal.x, criminal.y, criminal.width, criminal.height, criminal.color)
drawRectangle.drawRect(ctx, police.x ,police.y, police.width, police.height, police.color)

if ((police.x + (police.width / 2)) > (criminal.x - (criminal.width / 2)) ) {
        
    alert("You have been caught by the police! Refresh to play again!")
    clearInterval(gameStart)
    
}
}

function updateMovement() {

    if(keypressed) {

    setInterval(() => {

        criminal.x += 0.5
        drawPlayers();
        
    }, 90);

}

}