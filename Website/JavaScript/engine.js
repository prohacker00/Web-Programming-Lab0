// This file has the engine to start the game, which runs at 60 frames per second

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const dr = new drawRect();

var gameStart = setInterval(drawPlayers, 16.67);

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

    if (policeSpacePressed) {
        bullet.x = bullet.x + 20
        bullet.y = police.y;

    }

    //collision detection
    if (police.x < (criminal.x + criminal.width) && (police.x + police.width) > criminal.x && (police.y < (criminal.y + criminal.height) && ((police.y + police.height) > criminal.y))) {

        alert("You have been caught by the police! Refresh to play again!")
        //stop game here
        clearInterval(gameStart)
    }

    //Players speed decreases as they jump, hence enabling a gravity like effect
    if (upPressed) {
        criminal.y -= criminal.gravity;
        criminal.gravity -= 0.2
        console.log(Math.ceil(criminal.y) + ' ' + criminal.gravity)

        if (Math.ceil(criminal.y) >= 550) {
            upPressed = false;
            criminal.gravity = 8
            return;
        }

    }

    dr.rectangle(ctx, background)
    dr.rectangle(ctx, platform)
    dr.rectangle(ctx, criminal)
    dr.rectangle(ctx, police)
    dr.rectangle(ctx, bullet)

}