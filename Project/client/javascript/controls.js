document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var bulletTime = true;

var policeSpacePressed;

var criminalImageStatus;

function keyDownHandler(event) {

    // Criminal keycodes
   
    if (event.keyCode == 39) {
        criminal.rightPressed = true;
        criminalImageStatus = criminal.imageR

    } else if (event.keyCode == 37) {
        criminal.leftPressed = true;
        criminalImageStatus = criminal.imageL

    }

    if (event.keyCode == 38) {
        criminal.upPressed = true;
    }

    // Police event keycodes

    if (event.keyCode == 68) {
        police.rightPressed = true;

    }

    if (event.keyCode == 65) {
        police.leftPressed = true;
    }

    if (event.keyCode == 87) {
        police.upPressed = true;
        
    }

    if (event.keyCode == 32 && bulletTime) {
        bulletTime = false;
        policeSpacePressed = true;
        bullet.x = police.x
        bullet.y = police.y + (police.height/2)
    }

}

function keyUpHandler(event) {

    // Criminal

    if (event.keyCode == 39) {
        criminal.rightPressed = false;

    } else if (event.keyCode == 37) {
        criminal.leftPressed = false;

    }

    // Police

    if (event.keyCode == 68) {
        police.rightPressed = false;
    }

    if (event.keyCode == 65) {
        police.leftPressed = false;
    }

}