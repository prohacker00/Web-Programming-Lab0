document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var bulletTime = true;

var policeSpacePressed;

var criminalImageStatus;

function keyDownHandler(event) {

    // Criminal keycodes


    // Right
    
    if (event.keyCode == 39) {
        criminalMove.rightPressed = true;
        criminalImageStatus = criminalSprites.imageR

    // Left

    } else if (event.keyCode == 37) {
        criminalMove.leftPressed = true
        criminalImageStatus = criminalSprites.imageL

    }

    // Up

    if (event.keyCode == 38) {
        criminalMove.upPressed = true;
    }

    // Down

    if(event.keyCode == 40) {
        criminalMove.downPressed = true
    }

    // Police event keycodes

    if (event.keyCode == 68) {
        policeMove.rightPressed = true;
        policeImageStatus = policeSprites.imageR

    }

    if (event.keyCode == 65) {
        policeMove.leftPressed = true;
        policeImageStatus = policeSprites.imageL
    }

    if (event.keyCode == 87) {
        policeMove.upPressed = true;

    }

    if (event.keyCode == 32) {
        policeMove.spacePressed = true;
    }
}

function keyUpHandler(event) {

    // Criminal

    if (event.keyCode == 39) {
        criminalMove.rightPressed = false

    } else if (event.keyCode == 37) {
        criminalMove.leftPressed = false;
    }

    // Police

    if (event.keyCode == 68) {
        policeMove.rightPressed = false;
    }

    if (event.keyCode == 65) {
        policeMove.leftPressed = false;
    }
}