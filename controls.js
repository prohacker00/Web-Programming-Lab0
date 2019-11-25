document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);


function keyDownHandler(event) {

    // Right

    if (event.keyCode == 68) {
        // criminalMove.rightPressed = true;
        playersMove.rightPressed = true

        // Left

    } else if (event.keyCode == 65) {
        // criminalMove.leftPressed = true
        playersMove.leftPressed = true;

    }

    // Up

    if (event.keyCode == 87) {
        // criminalMove.upPressed = true;
        playersMove.upPressed = true
    }

    // Down

    if (event.keyCode == 32) {
        // criminalMove.downPressed = true
        playersMove.downPressed = true;
    }

}

function keyUpHandler(event) {

    // Criminal

    if (event.keyCode == 68) {
        criminalMove.rightPressed = false
        playersMove.rightPressed = false

    } else if (event.keyCode == 65) {
        criminalMove.leftPressed = false;
        playersMove.leftPressed = false;
    }

}