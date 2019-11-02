// 

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var rightPressed;
var leftPressed;
var upPressed;
var downPressed;

var policeRightPressed;
var policeLeftPressed;
var policeSpacePressed;



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

    if (event.keyCode == 32) {
        policeSpacePressed = true;
    }

}

function keyUpHandler(event) {

    if (event.keyCode == 39) {
        rightPressed = false;

    } else if (event.keyCode == 37) {
        leftPressed = false;

    }

    if (event.keyCode == 68) {
        policeRightPressed = false;

    }

    if (event.keyCode == 65) {
        policeLeftPressed = false;
    }

    if (event.keyCode == 32) {

    }
}